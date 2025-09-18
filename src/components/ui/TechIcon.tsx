import React from 'react';
import {
  SiPython, SiJavascript, SiPhp, SiFastapi, SiHtml5, SiCss3, SiGit,
  SiGithub, SiMysql, SiMongodb, SiRender, SiFigma, SiWordpress,
  SiBootstrap, SiPandas, SiLinux, SiAirtable,
  SiArcgis, SiGooglemaps, SiGooglesheets,
} from 'react-icons/si';

type TechDefinition = {
  icon?: React.ComponentType<any>;
  emoji?: string;
  svgUrl?: string;
  color?: string;
};

const techMap: Record<string, TechDefinition> = {
  python: { icon: SiPython, color: 'text-blue-500' },
  javascript: { icon: SiJavascript, color: 'text-yellow-500' },
  php: { icon: SiPhp, color: 'text-indigo-500' },
  git: { icon: SiGit, color: 'text-orange-600' },
  github: { icon: SiGithub },
  linux: { icon: SiLinux },
  wordpress: { icon: SiWordpress, color: 'text-blue-500' },
  airtable: { icon: SiAirtable, color: 'text-blue-400' },
  arcgis: { icon: SiArcgis, color: 'text-blue-600' },
  arcgisapi: { icon: SiArcgis, color: 'text-blue-600' },
  googlemaps: { icon: SiGooglemaps, color: 'text-green-600' },
  googlemapsapi: { icon: SiGooglemaps, color: 'text-green-600' },
  googlesheets: { icon: SiGooglesheets, color: 'text-green-500' },
  sql: { icon: SiMysql, color: 'text-blue-700' },
  mysql: { icon: SiMysql, color: 'text-blue-700' },
  mongodb: { icon: SiMongodb, color: 'text-green-600' },
  pandas: { icon: SiPandas, color: 'text-blue-700' },
  render: { icon: SiRender, color: 'text-cyan-400' },
  html5: { icon: SiHtml5, color: 'text-orange-600' },
  css3: { icon: SiCss3, color: 'text-blue-600' },
  bootstrap: { icon: SiBootstrap, color: 'text-purple-600' },
  figma: { icon: SiFigma, color: 'text-purple-500' },
  fastapi: { icon: SiFastapi, color: 'text-emerald-500' },
  java: { emoji: '☕' },
  playwright: { emoji: '🎭' },
  beautifulsoup: { emoji: '🍜' },
  googleapi: { icon: SiGooglemaps, color: 'text-green-600' },
  googleappscript: { svgUrl: '/technologies/appscript.svg' },
  streamlit: { svgUrl: 'https://cdn.simpleicons.org/streamlit/FF4B4B' },
};

interface TechIconProps {
  displayName: string;
  lookupName?: string;
}

export default function TechIcon({ displayName, lookupName }: TechIconProps) {
  const iconSize = "h-4 w-4";
  const baseClasses = "flex items-center gap-x-2 px-2 py-1 bg-muted/50 rounded-md text-muted-foreground border border-border/50";

  const finalLookupName = lookupName || displayName;
  const lookupKey = finalLookupName.toLowerCase().replace(/\s+/g, '');
  const tech = techMap[lookupKey];

  if (!tech) {
    return (
      <div className={baseClasses} title={displayName}>
        {displayName}
      </div>
    );
  }

  let finalSvgUrl = tech.svgUrl;


  if (tech.svgUrl && tech.svgUrl.startsWith('/')) {
    finalSvgUrl = `${import.meta.env.BASE_URL}${tech.svgUrl}`;
  }


  return (
    <div className={baseClasses} title={displayName}>
      {tech.icon && <tech.icon className={`${iconSize} ${tech.color || ''}`} />}
      {tech.emoji && <span role="img" aria-label={displayName}>{tech.emoji}</span>}
      
      {finalSvgUrl && <img src={finalSvgUrl} alt={`${displayName} icon`} className={iconSize} />}
      
      <span>{displayName}</span>
    </div>
  );
}