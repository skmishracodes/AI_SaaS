"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModel } from "@/hooks/use-pro-model";

interface FreeCounterProps {
  count: number;
  isPro: boolean
}

const FreeCounter = ({ count, isPro = false }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const proModel = useProModel();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  if(isPro){
    return null
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-white mb-4 space-y-2">
            <p className="text-sm font-bold">
              {count} / {MAX_FREE_COUNT} Free Generations
            </p>
            <Progress className="h-3" value={(count / MAX_FREE_COUNT) * 100} />
          </div>
          <Button
            className="w-full"
            variant={"premium"}
            onClick={proModel.onOpen}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
