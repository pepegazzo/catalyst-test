
import { Card, CardContent } from "@/components/ui/card";

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
            
            <div className="h-32 rounded-md bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Content area</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
