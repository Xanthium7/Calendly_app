import { Button } from "@/components/ui/button";
import { SignedOut, SignUpButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-center container my-4 mx-auto">
      <h1 className="text-3xl mb-4">Home Page</h1>
      <div className="flex gap-2 justify-center">
        <Button asChild>
          <SignInButton />
        </Button>
        <Button>
          <SignUpButton />
        </Button>
      </div>
    </div>
  );
}
