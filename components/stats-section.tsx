import { leaderboard, seasonStats } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function StatsSection() {
  return (
    <section aria-labelledby="stats" className="scroll-mt-4">
      <SectionHeading
        id="stats"
        eyebrow="Poker stats"
        title="2026 season by the numbers"
        description="Live tournament earnings and event data tracked across the major circuits."
      />

      <dl className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
        {seasonStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-card p-5">
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="font-serif text-3xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <caption className="mb-3 text-left text-xs font-semibold uppercase tracking-widest">
            Money leaders — 2026 live season
          </caption>
          <thead>
            <tr className="border-b-2 border-foreground text-xs text-muted-foreground">
              <th scope="col" className="py-2 pr-4 font-medium">
                #
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Player
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Country
              </th>
              <th scope="col" className="py-2 pr-4 text-right font-medium">
                Cashes
              </th>
              <th scope="col" className="py-2 pr-4 text-right font-medium">
                Titles
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Earnings
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leaderboard.map((player) => (
              <tr key={player.name}>
                <td className="py-3 pr-4 font-serif text-lg font-semibold text-primary">{player.rank}</td>
                <th scope="row" className="py-3 pr-4 font-medium">
                  {player.name}
                </th>
                <td className="py-3 pr-4 text-muted-foreground">{player.country}</td>
                <td className="py-3 pr-4 text-right font-mono">{player.cashes}</td>
                <td className="py-3 pr-4 text-right font-mono">{player.titles}</td>
                <td className="py-3 text-right font-mono font-medium">{player.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
