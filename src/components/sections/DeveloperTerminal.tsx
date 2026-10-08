"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "~/portfolio", className: "text-[#52525B]" },
  {
    text: 'const developer = "Afillah Ajie Pratama"',
    segments: [
      { text: "const ", className: "text-[#7C3AED]" },
      { text: "developer", className: "text-[#FAFAFA]" },
      { text: " = ", className: "text-[#52525B]" },
      { text: '"Afillah Ajie Pratama"', className: "text-emerald-400" },
    ],
  },
  {
    text: 'const stack = ["Next.js", "TypeScript"]',
    segments: [
      { text: "const ", className: "text-[#7C3AED]" },
      { text: "stack", className: "text-[#FAFAFA]" },
      { text: " = ", className: "text-[#52525B]" },
      { text: '["Next.js", "TypeScript"]', className: "text-emerald-400" },
    ],
  },
  {
    text: 'const focus = "Building useful things"',
    segments: [
      { text: "const ", className: "text-[#7C3AED]" },
      { text: "focus", className: "text-[#FAFAFA]" },
      { text: " = ", className: "text-[#52525B]" },
      { text: '"Building useful things"', className: "text-emerald-400" },
    ],
  },
  { text: "// currently building...", className: "text-[#52525B]" },
  {
    text: 'status: "available"',
    className: "mt-2",
    segments: [
      { text: "status", className: "text-[#7C3AED]" },
      { text: ": ", className: "text-[#52525B]" },
      { text: '"available"', className: "text-emerald-400" },
    ],
  },
];

const totalCharacters = lines.reduce((total, line) => total + line.text.length, 0);
const fullTranscript = lines.map((line) => line.text).join("\n");

export default function DeveloperTerminal() {
  const [typedCharacters, setTypedCharacters] = useState(totalCharacters);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (motionPreference.matches) {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let stopped = false;

    const typeNextCharacter = (character: number) => {
      if (stopped) {
        return;
      }

      if (character > totalCharacters) {
        timer = setTimeout(() => {
          setTypedCharacters(0);
          timer = setTimeout(() => typeNextCharacter(1), 350);
        }, 1800);
        return;
      }

      setTypedCharacters(character);
      timer = setTimeout(() => typeNextCharacter(character + 1), 38);
    };

    timer = setTimeout(() => {
      setTypedCharacters(0);
      timer = setTimeout(() => typeNextCharacter(1), 140);
    }, 200);

    const handleMotionPreferenceChange = () => {
      clearTimeout(timer);

      if (motionPreference.matches) {
        stopped = true;
        setTypedCharacters(totalCharacters);
        return;
      }

      stopped = false;
      timer = setTimeout(() => {
        setTypedCharacters(0);
        timer = setTimeout(() => typeNextCharacter(1), 140);
      }, 200);
    };

    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      stopped = true;
      clearTimeout(timer);
      motionPreference.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, []);

  const remainingCharacters = typedCharacters;

  return (
    <>
      <pre className="sr-only">{fullTranscript}</pre>
      <div aria-hidden="true" className="p-6 font-mono text-sm leading-7">
        {lines.map((line, index) => {
          const lineStart = lines
            .slice(0, index)
            .reduce((total, previousLine) => total + previousLine.text.length, 0);
          const visibleCharacters = Math.max(
            0,
            Math.min(line.text.length, remainingCharacters - lineStart),
          );

          return (
            <p
              key={line.text}
              className={`${index === 1 ? "mt-4" : ""} ${index === 4 ? "mt-6 border-t border-[#27272A] pt-5" : ""} ${line.className ?? ""}`}
            >
              {line.segments
                ? line.segments.map((segment) => {
                    const segmentStart = line.text.indexOf(segment.text);
                    const visibleSegment = Math.max(
                      0,
                      Math.min(
                        segment.text.length,
                        visibleCharacters - segmentStart,
                      ),
                    );

                    return (
                      <span key={segment.text} className={segment.className}>
                        {segment.text.slice(0, visibleSegment)}
                      </span>
                    );
                  })
                : line.text.slice(0, visibleCharacters)}
              {visibleCharacters > 0 &&
                visibleCharacters < line.text.length && (
                <span className="terminal-caret">▍</span>
                )}
            </p>
          );
        })}

        <div className="mt-5 flex items-center gap-2">
          <span className="text-[#7C3AED]">➜</span>
          <span className="h-4 w-2 animate-pulse bg-[#FAFAFA]" />
        </div>
      </div>
    </>
  );
}
