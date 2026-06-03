import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ end, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(stepValue * currentStep), end));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatItem end={12} label="Years of Experience" suffix="+" />
          <StatItem end={100} label="Clients Served" suffix="+" />
          <StatItem end={10000} label="Candidates Placed" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;