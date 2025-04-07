
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/Footer";

const formSchema = z.object({
  reporterEmail: z.string().email("Valid email is required."),
  reporterName: z.string().min(2, "Name must be at least 2 characters."),
  reportType: z.string().min(1, "Please select a report type."),
  contentUrl: z.string().min(1, "Please provide the content URL."),
  sellerName: z.string().optional(),
  description: z.string().min(10, "Please provide at least 10 characters describing the issue."),
  evidence: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms.",
  }),
});

const ReportAbuse = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reporterEmail: "",
      reporterName: "",
      reportType: "",
      contentUrl: "",
      sellerName: "",
      description: "",
      evidence: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log(values);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Report Submitted",
        description: "Thank you for your report. We'll investigate this issue promptly.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Report Abuse</h1>
          <p className="text-gray-600 mb-8">
            Use this form to report content, users, or behavior that violates our policies. 
            We take all reports seriously and will investigate promptly.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Submit a Report</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="reporterEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          We'll only use this to contact you about your report.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="reporterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="reportType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Report Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a report type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="copyright">Copyright Violation</SelectItem>
                          <SelectItem value="inappropriate">Inappropriate Content</SelectItem>
                          <SelectItem value="underage">Underage Content</SelectItem>
                          <SelectItem value="harassment">Harassment or Bullying</SelectItem>
                          <SelectItem value="impersonation">Impersonation</SelectItem>
                          <SelectItem value="scam">Scam or Fraud</SelectItem>
                          <SelectItem value="other">Other Violation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contentUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content URL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://magnificentsoles.com/content/..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide the direct URL to the content in question.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="sellerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seller/User Name (if applicable)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Username of the seller or user" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description of Issue</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe the issue in detail... Why do you believe this content violates our policies?" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="evidence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Evidence (optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide any additional evidence or details that may help our investigation..." 
                          className="min-h-[80px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I confirm that this report is truthful and made in good faith. I understand that false reports may result in account restrictions.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <p className="text-gray-600 mb-4">
              After you submit your report:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Our team will review your report within 24-48 hours.</li>
              <li>We may contact you for additional information if needed.</li>
              <li>Appropriate action will be taken based on our investigation.</li>
              <li>You will be notified once we've resolved the issue.</li>
            </ol>
            <p className="text-gray-600 mt-4">
              For urgent matters, please contact our support team directly.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
            <Link to="/content-policy" className="text-blue-600 hover:underline">
              View Content Policy
            </Link>
            <Link to="/dmca" className="text-blue-600 hover:underline">
              DMCA Policy
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportAbuse;
