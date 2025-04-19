'use client';

import ArchetypeDisplay from './ArchetypeDisplay';
import { archetypeData } from './archetypeData';

export default function ArchetypeResult({
  reply,
  archetype,
}: {
  reply: string;
  archetype: string;
}) {
  const data = archetypeData[archetype];
  if (!data) return null;

  return (
    <ArchetypeDisplay
      reply={reply}
      archetype={archetype}
      quote={data.quote}
      icon={data.icon}
      color={data.color}
    />
  );
}
