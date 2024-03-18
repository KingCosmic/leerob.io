import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience-examples">love</Link>, and
          along the way, teach the next generation of developers. Here's a
          summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Sin Tiempo</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer
        </p>
        <p>
          I joined <a href="https://www.linkedin.com/company/sin-tiempo-llc/">Sin Tiempo</a> early to grow{' '}
          our portfolio and client list.
        </p>
        <ul>
          <li>
            Since joining the company, I've played a pivotal role in developing core
            gameplay systems, resulting in smoother player
            interactions and heightened engagement.
          </li>
          <li>
            I've implemented efficient algorithms for collision detection,
            pathfinding, and other essential
            game functionalities to ensure smooth gameplay.
          </li>
          <li>
            I'm always engaging in continuous learning and professional
            development to stay updated with industry trends
            and best practices relevant to Game Development.
          </li>
        </ul>
        <p>
          Since I joined Sin Tiempo in 2023, I have continuously pursued learning
          opportunities to enhance my skills. I actively engage with new challenges,
          seeking feedback from my peers to refine my abilities and contribute
          effectively to our projects.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Limitless Labs</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer, 2021 — 2023
        </p>
        <p>
          Limitless Labs, a new startup wanted to build a place
          for people to be onboarded into web3. I joined a team of
          product engineers working across web, and web3 to build out
          their application (~20k MAU) with React, Express.js, WebRTC,
          Websockets and Phaser.js
        </p>
        <p>
          I spearheaded our team's efforts on the frontend by
          implementing Phaser.js best practices and facilitating the
          familiarization of our fellow engineers with the framework
          and optimal system designs for performance and code organization.
          Additionally, I actively contributed to the enhancement of Phaser.js
          by resolving bugs encountered during our project.
        </p>
        <p>
         Over the span of my tenure, I tackled several challenging endeavors.
         These included developing an Area of Interest (AOI) implementation
         focused on enhancing performance and scalability,
         all the while seamlessly integrating quests and web3 interactions.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Endless Clouds</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2021 — 2021
        </p>
        <p>
          Endless Clouds, a new startup wanted to build a play to earn game
          in web3. I joined early, at the time there was only 2 devs, we worked across front
          and backend to build out the functionality of the application
          (~12k MAU) with Phaser.js, Socket.io, and the OpenSea api.
        </p>
        <p>
          I took the lead in developing both the frontend and backend, guiding our team
          through the implementation of Phaser.js best practices.
          I also ensured that our fellow engineers were well-versed in
          the framework and adept in designing systems for optimal
          performance and code organization.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">AppSolution</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2017 — 2018
        </p>
        <p>
          AppSolution specializes in developing and hosting customer-centric
          frontend applications designed to seamlessly facilitate online ordering,
          streamline reservations, and optimize rewards programs for
          enhanced user engagement
        </p>
      </div>
    </section>
  );
}