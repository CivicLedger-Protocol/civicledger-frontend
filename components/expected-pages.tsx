export function ExpectedPages() {
  return (
    <section className="section site-map" id="site-map">
      <span className="tag">Site map</span>
      <h2>Expected pages (delivery backlog)</h2>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>
        This table is the contract between product and engineering. Routes marked scaffold ship as
        placeholders; planned routes are tracked for sprint planning.
      </p>
      <div style={{ overflowX: "auto", marginTop: 16 }}>
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key="/"><td><code>/</code></td><td>Strategic landing + site map</td><td>Scaffold</td></tr>
            <tr key="/solutions"><td><code>/solutions</code></td><td>Agency and donor deployment modules</td><td>Scaffold</td></tr>
            <tr key="/architecture"><td><code>/architecture</code></td><td>Contract boundaries</td><td>Scaffold</td></tr>
            <tr key="/transparency"><td><code>/transparency</code></td><td>Citizen-facing explorer preview</td><td>Planned</td></tr>
            <tr key="/roadmap"><td><code>/roadmap</code></td><td>Milestone execution</td><td>Scaffold</td></tr>
            <tr key="/issues"><td><code>/issues</code></td><td>Contributor queue</td><td>Scaffold</td></tr>
            <tr key="/docs"><td><code>/docs</code></td><td>Integration and governance docs</td><td>Scaffold</td></tr>
            <tr key="/contact"><td><code>/contact</code></td><td>Pilot partnerships</td><td>Scaffold</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
