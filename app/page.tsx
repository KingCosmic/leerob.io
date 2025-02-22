import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
// import smashing from 'public/images/home/smashing.jpg';
// import summit from 'public/images/home/summit.jpg';
// import reactathon from 'public/images/home/reactathon.jpg';
// import ship from 'public/images/home/ship.jpg';
// import filming from 'public/images/home/filming.jpg';
// import meetups from 'public/images/home/meetups.jpg';
// import vercel from 'public/images/home/vercel.jpg';
// import avatar from 'app/avatar.jpg';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function ProjectLink({ name, description, link }) {
  return (
    <div className="group">
      <a
        href={link}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Austyn 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community builder. I currently `}
        <Link href="/work">work</Link>
        {` as a self employed Software Engineer.`}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I contribute to open-source projects such as Phaser.js, Fastifyjs,
          Coding Train, and Kode.
          Skilled in JavaScript, TypeScript, Next.js, Haxe, and p5.js.
          Committed to continuous learning and making meaningful contributions
          in the tech industry.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here you'll find a few links to my projects.
        </p>
      </div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <ProjectLink
          name="GianaKouros Gourmet"
          description="Explore recipes. Built with next.js sanity and tailwindcss"
          link=""
        />
        <ProjectLink
          name="BardsBallad"
          description="Tabletop character manager. Built with next.js, react-ridge-state, tailwindcss"
          link=""
        />
      </div>

      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          and here you'll find writing about technologies
          I'm interested in at the time, or how I'm learning and growing in my
          career, sharing knowledge along the way.
        </p>
      </div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink
          name="Exploring Game Development with Phaser.js"
          slug="exploring-game-development-with-phaser"
        />
      </div> */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          And here you can find some Tech i'm excited about.
        </p>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with companies on building open-source
          communities, product-led growth, and more.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/kingcosm1c"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://austynstuddard.substack.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}