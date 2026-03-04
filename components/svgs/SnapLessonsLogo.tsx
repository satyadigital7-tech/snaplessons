/**
 * SnapLessonsLogo
 * Accurate SVG recreation of the official Snap Lessons logo:
 *  - Dual-tone S-shaped swoosh/flame (gold #F5A623 outer + navy #1E3A8A inner, white gap)
 *  - "snaplessons" bold navy wordmark
 *  - "IT Services & Online Education" gold tagline
 *
 * Usage in navbar (horizontal):  <SnapLessonsLogo className="h-12 w-auto" />
 * Usage standalone (stacked):    <SnapLessonsLogo stacked className="w-32" />
 */
interface Props {
    className?: string;
    /** Stacked = icon above text (like uploaded image). Default = horizontal (icon + text side by side) */
    stacked?: boolean;
}

export default function SnapLessonsLogo({ className = "", stacked = false }: Props) {
    if (stacked) {
        // Vertical layout matching the uploaded brand image
        return (
            <svg viewBox="0 0 210 270" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ── FLAME ICON (centered above) ─────────────────── */}
                <FlameIcon x={30} y={0} w={150} h={170} />

                {/* ── "snaplessons" ────────────────────────────────── */}
                <text
                    x="105" y="210"
                    textAnchor="middle"
                    fill="#1E3A8A"
                    fontSize="36"
                    fontWeight="900"
                    fontFamily="'Plus Jakarta Sans','Inter',Arial,sans-serif"
                    letterSpacing="-1"
                >
                    snaplessons
                </text>

                {/* ── tagline ─────────────────────────────────────── */}
                <text
                    x="105" y="242"
                    textAnchor="middle"
                    fill="#F5A623"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="'Inter',Arial,sans-serif"
                    letterSpacing="0.3"
                >
                    IT Services &amp; Online Education
                </text>
            </svg>
        );
    }

    // ── HORIZONTAL LAYOUT (for navbar) ───────────────────────────
    return (
        <svg viewBox="0 0 310 68" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flame icon — 60×68 */}
            <FlameIcon x={0} y={0} w={60} h={68} />

            {/* "snaplessons" */}
            <text
                x="72" y="40"
                fill="#1E3A8A"
                fontSize="26"
                fontWeight="900"
                fontFamily="'Plus Jakarta Sans','Inter',Arial,sans-serif"
                letterSpacing="-0.8"
            >
                snaplessons
            </text>

            {/* Tagline */}
            <text
                x="74" y="58"
                fill="#F5A623"
                fontSize="11.5"
                fontWeight="700"
                fontFamily="'Inter',Arial,sans-serif"
                letterSpacing="0.2"
            >
                IT Services &amp; Online Education
            </text>
        </svg>
    );
}

/* ──────────────────────────────────────────────────────────────
   FlameIcon — the dual-swoosh S-shape
   Positioned at (x,y) within a w×h bounding box.
────────────────────────────────────────────────────────────── */
function FlameIcon({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    // Normalised paths drawn on a 100×120 viewBox; we scale via transform
    const scaleX = w / 100;
    const scaleY = h / 120;

    return (
        <g transform={`translate(${x},${y}) scale(${scaleX},${scaleY})`}>
            {/* ── Gold outer swoosh ─────────────────────────────── */}
            <path
                d="
          M 50 4
          C 66 2, 80 12, 80 26
          C 80 38, 70 46, 64 56
          C 58 66, 56 76, 60 86
          C 63 94, 68 98, 66 106
          C 64 114, 52 118, 40 114
          C 28 110, 22 100, 24 88
          C 26 78, 34 71, 38 61
          C 42 51, 40 41, 34 31
          C 28 21, 24 10, 34 5
          C 38 3, 44 3, 50 4 Z
        "
                fill="#F5A623"
            />

            {/* ── White gap — upper (right edge of upper belly) ── */}
            <path
                d="
          M 68 14
          C 76 20, 78 30, 74 40
          C 72 34, 72 24, 66 17 Z
        "
                fill="white"
                opacity="0.95"
            />

            {/* ── White gap — lower (left edge of lower belly) ── */}
            <path
                d="
          M 24 88
          C 22 98, 26 108, 34 113
          C 28 108, 24 98, 26 89 Z
        "
                fill="white"
                opacity="0.95"
            />

            {/* ── Blue inner swoosh ─────────────────────────────── */}
            <path
                d="
          M 42 6
          C 54 5, 68 14, 68 28
          C 68 40, 58 48, 52 58
          C 46 68, 44 78, 50 88
          C 54 96, 60 98, 58 106
          C 56 113, 46 116, 36 112
          C 28 108, 24 99, 28 89
          C 32 80, 40 73, 44 63
          C 48 53, 46 43, 40 33
          C 34 23, 28 12, 36 7
          C 38 6, 40 6, 42 6 Z
        "
                fill="#1E3A8A"
            />

            {/* ── Gold lower-curl accent ─────────────────────────── */}
            <path
                d="
          M 40 102
          C 44 108, 50 112, 52 110
          C 50 112, 44 110, 40 105 Z
        "
                fill="#F5A623"
                opacity="0.75"
            />
        </g>
    );
}
