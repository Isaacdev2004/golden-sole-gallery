
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowDown, ArrowUp, Filter, Image as ImageIcon, Plus, Video } from "lucide-react";

interface ContentItem {
  id: number;
  type: "photo" | "video";
  title: string;
  likes: number;
  sales: number;
  price: string;
  date: string;
  thumbnail: string;
}

interface ContentTabProps {
  filteredContent: ContentItem[];
  filterType: "all" | "photo" | "video";
  sortBy: "newest" | "oldest" | "price-high" | "price-low" | "popular";
  filterPopoverOpen: boolean;
  sortPopoverOpen: boolean;
  onAddNewClick: () => void;
  setFilterPopoverOpen: (open: boolean) => void;
  setSortPopoverOpen: (open: boolean) => void;
  setFilterType: (type: "all" | "photo" | "video") => void;
  setSortBy: (sort: "newest" | "oldest" | "price-high" | "price-low" | "popular") => void;
}

const ContentTab: React.FC<ContentTabProps> = ({
  filteredContent,
  filterType,
  sortBy,
  filterPopoverOpen,
  sortPopoverOpen,
  onAddNewClick,
  setFilterPopoverOpen,
  setSortPopoverOpen,
  setFilterType,
  setSortBy,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>My Content</CardTitle>
          <Button 
            className="bg-gold hover:bg-gold-dark"
            onClick={onAddNewClick}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex gap-3">
          <div className="flex-1">
            <Input placeholder="Search your content..." />
          </div>
          
          <Popover open={filterPopoverOpen} onOpenChange={setFilterPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-1 items-center">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 bg-white">
              <div className="space-y-2">
                <h3 className="font-medium text-sm mb-2">Content Type</h3>
                <div className="space-y-1">
                  <Button 
                    variant={filterType === "all" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${filterType === "all" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setFilterType("all");
                      setFilterPopoverOpen(false);
                    }}
                  >
                    All
                  </Button>
                  <Button 
                    variant={filterType === "photo" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${filterType === "photo" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setFilterType("photo");
                      setFilterPopoverOpen(false);
                    }}
                  >
                    Photos
                  </Button>
                  <Button 
                    variant={filterType === "video" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${filterType === "video" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setFilterType("video");
                      setFilterPopoverOpen(false);
                    }}
                  >
                    Videos
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover open={sortPopoverOpen} onOpenChange={setSortPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-1 items-center">
                {sortBy === "newest" || sortBy === "price-high" || sortBy === "popular" ? (
                  <ArrowDown className="h-4 w-4" />
                ) : (
                  <ArrowUp className="h-4 w-4" />
                )}
                Sort
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 bg-white">
              <div className="space-y-2">
                <h3 className="font-medium text-sm mb-2">Sort By</h3>
                <div className="space-y-1">
                  <Button 
                    variant={sortBy === "newest" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${sortBy === "newest" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setSortBy("newest");
                      setSortPopoverOpen(false);
                    }}
                  >
                    Newest
                  </Button>
                  <Button 
                    variant={sortBy === "oldest" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${sortBy === "oldest" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setSortBy("oldest");
                      setSortPopoverOpen(false);
                    }}
                  >
                    Oldest
                  </Button>
                  <Button 
                    variant={sortBy === "price-high" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${sortBy === "price-high" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setSortBy("price-high");
                      setSortPopoverOpen(false);
                    }}
                  >
                    Price (High to Low)
                  </Button>
                  <Button 
                    variant={sortBy === "price-low" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${sortBy === "price-low" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setSortBy("price-low");
                      setSortPopoverOpen(false);
                    }}
                  >
                    Price (Low to High)
                  </Button>
                  <Button 
                    variant={sortBy === "popular" ? "default" : "ghost"} 
                    className={`w-full justify-start text-left ${sortBy === "popular" ? "bg-gold hover:bg-gold-dark" : ""}`}
                    onClick={() => {
                      setSortBy("popular");
                      setSortPopoverOpen(false);
                    }}
                  >
                    Most Popular
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredContent.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-black bg-opacity-60">
                  {item.type === "photo" ? <ImageIcon className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                  {item.type}
                </Badge>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium mb-1">{item.title}</h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{item.likes} likes</span>
                  <span>{item.sales} sales</span>
                  <span className="text-gold font-medium">{item.price}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentTab;
