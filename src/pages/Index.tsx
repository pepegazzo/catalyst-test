
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <Card className="w-full max-w-md border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-medium text-gray-900">Welcome</h1>
              <p className="mt-2 text-gray-500">
                Your blank page is ready. Start building your project.
              </p>
            </div>
            
            <div className="rounded-md bg-gray-50 p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Github className="h-5 w-5 text-gray-700" />
                <h2 className="text-lg font-medium text-gray-800">GitHub Repository</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Connect your project to a GitHub repository to manage your code and collaborate with others.
              </p>
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal border-gray-300 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Connect existing repository
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal border-gray-300 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Create new repository
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
