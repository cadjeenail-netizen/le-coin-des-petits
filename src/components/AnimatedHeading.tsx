import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const CHAR_DELAY = 30;
  const INITIAL_DELAY = 200;

  const lines = text.split('\n');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Compute cumulative char offset for delay calculation
  const lineOffsets = lines.map((_, i) =>
    lines.slice(0, i).reduce((acc, l) => acc + l.length, 0)
  );

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => {
        // Split line into words; interleave spaces back
        const tokens = line.split(/( )/);
        let charCount = lineOffsets[lineIndex];

        return (
          <div key={lineIndex} style={{ display: 'block' }}>
            {tokens.map((token, tokenIndex) => {
              if (token === ' ') {
                charCount += 1;
                return <span key={tokenIndex}>&nbsp;</span>;
              }

              // Wrap each word in a no-break span so browser can't split mid-word
              const wordSpan = (
                <span key={tokenIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {token.split('').map((char, charIndex) => {
                    const delay = INITIAL_DELAY + (charCount + charIndex) * CHAR_DELAY;
                    return (
                      <span
                        key={charIndex}
                        style={{
                          display: 'inline-block',
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                          transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
              charCount += token.length;
              return wordSpan;
            })}
          </div>
        );
      })}
    </div>
  );
}
