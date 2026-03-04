export default function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
        >
            <defs>
                <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
                <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="chartGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.05" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background glow circles */}
            <circle cx="300" cy="250" r="220" fill="url(#glowGrad)" />
            <circle cx="300" cy="250" r="150" fill="#1E3A8A" fillOpacity="0.08" />

            {/* Orbit ring */}
            <ellipse cx="300" cy="260" rx="200" ry="60" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 4" opacity="0.35" />
            <ellipse cx="300" cy="260" rx="240" ry="80" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.2" />

            {/* === Bar Chart (bottom left) === */}
            <g transform="translate(60, 280)">
                {/* Chart background card */}
                <rect x="0" y="-20" width="160" height="140" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                {/* Title */}
                <text x="10" y="-4" fill="#94A3B8" fontSize="10" fontFamily="Inter">Monthly Growth</text>
                {/* Bars */}
                <rect x="18" y="60" width="20" height="50" rx="4" fill="url(#chartGrad)" />
                <rect x="48" y="40" width="20" height="70" rx="4" fill="url(#chartGrad)" />
                <rect x="78" y="20" width="20" height="90" rx="4" fill="url(#chartGrad)" />
                <rect x="108" y="10" width="20" height="100" rx="4" fill="url(#goldGrad)" />
                {/* Up arrow */}
                <path d="M138 25 L148 15 L148 22 L158 22 L158 16 L148 16 L148 8 L138 18Z" fill="#22C55E" />
                {/* Value labels */}
                <text x="18" y="55" fill="#64748B" fontSize="8" fontFamily="Inter">Q1</text>
                <text x="48" y="35" fill="#64748B" fontSize="8" fontFamily="Inter">Q2</text>
                <text x="78" y="15" fill="#64748B" fontSize="8" fontFamily="Inter">Q3</text>
                <text x="108" y="5" fill="#F59E0B" fontSize="8" fontFamily="Inter" fontWeight="bold">Q4</text>
            </g>

            {/* === Rocket === */}
            <g transform="translate(220, 60)" filter="url(#softGlow)">
                {/* Rocket body */}
                <path
                    d="M80 200 L80 80 Q80 20 130 10 Q180 20 180 80 L180 200 Z"
                    fill="url(#rocketGrad)"
                    strokeWidth="0"
                />
                {/* Rocket nose cone */}
                <path d="M80 80 Q80 20 130 5 Q180 20 180 80" fill="#1E3A8A" />
                {/* Window */}
                <circle cx="130" cy="100" r="22" fill="#0F172A" />
                <circle cx="130" cy="100" r="18" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="123" cy="94" r="5" fill="white" fillOpacity="0.4" />
                {/* Left wing */}
                <path d="M80 160 L40 200 L80 195 Z" fill="url(#goldGrad)" />
                {/* Right wing */}
                <path d="M180 160 L220 200 L180 195 Z" fill="url(#goldGrad)" />
                {/* Bottom nozzle */}
                <rect x="100" y="195" width="60" height="15" rx="4" fill="#334155" />
                {/* Flame */}
                <path d="M100 210 Q110 260 130 270 Q150 260 160 210 Z" fill="#F59E0B" opacity="0.9" />
                <path d="M108 210 Q116 248 130 255 Q144 248 152 210 Z" fill="#FBBF24" />
                <path d="M115 210 Q122 238 130 243 Q138 238 145 210 Z" fill="white" opacity="0.6" />
                {/* Stars around rocket */}
                <circle cx="40" cy="60" r="2" fill="white" opacity="0.6" />
                <circle cx="220" cy="40" r="2" fill="white" opacity="0.6" />
                <circle cx="20" cy="130" r="1.5" fill="#F59E0B" opacity="0.7" />
                <circle cx="240" cy="120" r="1.5" fill="#F59E0B" opacity="0.7" />
                <path d="M50 30 L52 26 L54 30 L58 28 L54 32 L56 36 L52 34 L48 36 L50 32 L46 28Z" fill="#F59E0B" opacity="0.5" />
            </g>

            {/* === Line Chart (bottom right) === */}
            <g transform="translate(380, 290)">
                <rect x="0" y="-20" width="170" height="130" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                <text x="10" y="-4" fill="#94A3B8" fontSize="10" fontFamily="Inter">ROI Performance</text>
                {/* Grid lines */}
                <line x1="20" y1="100" x2="150" y2="100" stroke="#334155" strokeWidth="0.5" />
                <line x1="20" y1="75" x2="150" y2="75" stroke="#334155" strokeWidth="0.5" />
                <line x1="20" y1="50" x2="150" y2="50" stroke="#334155" strokeWidth="0.5" />
                <line x1="20" y1="25" x2="150" y2="25" stroke="#334155" strokeWidth="0.5" />
                {/* Area fill */}
                <path d="M20 90 L50 75 L80 60 L110 40 L140 15 L140 100 L20 100Z" fill="#3B82F6" fillOpacity="0.15" />
                {/* Line */}
                <polyline
                    points="20,90 50,75 80,60 110,40 140,15"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Dots */}
                {[[20, 90], [50, 75], [80, 60], [110, 40], [140, 15]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
                ))}
                {/* Gold trend line */}
                <polyline
                    points="20,95 50,85 80,70 110,55 140,35"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 3"
                />
                {/* Value badge */}
                <rect x="105" y="5" width="45" height="18" rx="4" fill="#22C55E" fillOpacity="0.2" />
                <text x="112" y="17" fill="#22C55E" fontSize="9" fontFamily="Inter" fontWeight="bold">+247%</text>
            </g>

            {/* === Floating Metric Cards === */}
            {/* Card 1: Traffic */}
            <g transform="translate(60, 100)">
                <rect x="0" y="0" width="110" height="60" rx="10" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" />
                <circle cx="20" cy="20" r="10" fill="#3B82F6" fillOpacity="0.2" />
                <path d="M15 22 L20 17 L25 22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="38" y="16" fill="#94A3B8" fontSize="9" fontFamily="Inter">Organic Traffic</text>
                <text x="38" y="30" fill="white" fontSize="15" fontFamily="Inter" fontWeight="bold">+185%</text>
                <rect x="0" y="45" width="95" height="3" rx="2" fill="#334155" />
                <rect x="0" y="45" width="72" height="3" rx="2" fill="#3B82F6" />
            </g>

            {/* Card 2: Leads */}
            <g transform="translate(430, 100)">
                <rect x="0" y="0" width="110" height="60" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
                <circle cx="20" cy="20" r="10" fill="#F59E0B" fillOpacity="0.2" />
                <path d="M16 20 Q20 15 24 20 Q20 25 16 20Z" fill="#F59E0B" />
                <text x="38" y="16" fill="#94A3B8" fontSize="9" fontFamily="Inter">Leads Generated</text>
                <text x="38" y="30" fill="white" fontSize="15" fontFamily="Inter" fontWeight="bold">2,847</text>
                <text x="38" y="44" fill="#22C55E" fontSize="9" fontFamily="Inter">↑ 94% this month</text>
            </g>

            {/* === Central orbit dots === */}
            <circle cx="175" cy="215" r="8" fill="#F59E0B" filter="url(#glow)" />
            <circle cx="425" cy="215" r="8" fill="#3B82F6" filter="url(#glow)" />
            <circle cx="300" cy="175" r="10" fill="white" fillOpacity="0.9" filter="url(#glow)" />

            {/* === SEO Speedometer (center bottom) === */}
            <g transform="translate(240, 360)">
                <rect x="0" y="0" width="120" height="70" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                <text x="14" y="16" fill="#94A3B8" fontSize="9" fontFamily="Inter">SEO Score</text>
                {/* Arc background */}
                <path d="M20 55 A40 40 0 0 1 100 55" stroke="#334155" strokeWidth="6" fill="none" strokeLinecap="round" />
                {/* Arc fill */}
                <path d="M20 55 A40 40 0 0 1 92 30" stroke="#22C55E" strokeWidth="6" fill="none" strokeLinecap="round" />
                {/* Needle */}
                <line x1="60" y1="55" x2="88" y2="28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                <circle cx="60" cy="55" r="4" fill="#F59E0B" />
                {/* Score */}
                <text x="45" y="52" fill="white" fontSize="14" fontFamily="Inter" fontWeight="bold">96</text>
            </g>
        </svg>
    );
}
