"use client";

import React from 'react';
import { 
  Waves, 
  Droplet, 
  Wind, 
  Timer, 
  Ruler, 
  Settings, 
  Heart, 
  Thermometer, 
  Sparkles,
  Flame,
  Layers,
  Sun,
  Zap,
  Anchor,
  Bath,
  Cloud,
  Droplets,
  Flower2,
  ShieldCheck,
  Sofa,
  LucideProps
} from 'lucide-react';

const iconMap = {
  Waves,
  Droplet,
  Wind,
  Timer,
  Ruler,
  Settings,
  Heart,
  Thermometer,
  Sparkles,
  Flame,
  Layers,
  Sun,
  Zap,
  Anchor,
  Bath,
  Cloud,
  Droplets,
  Flower2,
  ShieldCheck,
  Sofa
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps extends LucideProps {
  name: string;
}

const LucideIcon = ({ name, ...props }: LucideIconProps) => {
  const IconComponent = iconMap[name as IconName] || Waves;
  return <IconComponent {...props} />;
};

export default LucideIcon;
