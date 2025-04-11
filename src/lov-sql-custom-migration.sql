
-- This is just a reference file for you to see the SQL that should be run.
-- If it hasn't been run yet, you'll need to run the following SQL in Supabase:

-- Add profile_image column to profiles table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'profile_image'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN profile_image TEXT DEFAULT NULL;
  END IF;
END
$$;

-- Create content_uploads bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
SELECT 'content_uploads', 'content_uploads', true
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'content_uploads');

-- Allow authenticated users to upload files to the content_uploads bucket
CREATE POLICY IF NOT EXISTS "Allow authenticated uploads" 
  ON storage.objects FOR INSERT 
  TO authenticated 
  WITH CHECK (bucket_id = 'content_uploads');

-- Allow users to view their own uploaded files
CREATE POLICY IF NOT EXISTS "Allow users to view their uploads" 
  ON storage.objects FOR SELECT 
  TO authenticated 
  USING (bucket_id = 'content_uploads');
