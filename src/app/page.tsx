import Image from "next/image";

export default function Home() {
  return (
      <main>
        <p className="max-w-3xl text-xl"> Hi, I'm Steed. Welcome to my world. Here, you’ll find my projects, inspirations, and experiments in music, games, and technology. I’m always learning, creating, and problem-solving, and this site is where I share that process. If our interests overlap, I hope we can exchange ideas, inspire each other, and maybe even collaborate along the way.</p>

        <h2 className="text-xl mt-6 font-bold">Latest Project: Flappybird Remake</h2>
        <p className="max-w-3xl text-xl">
          As part of
          <a 
            href={"https://20_games_challenge.gitlab.io/"} 
            target="_blank" 
            className="text-blue-600 hover:underline visited:text-purple-600 cursor-pointer transition-colors duration-200"> The 20 Games Challenge, </a>
          I remade Flappybird in Godot! Check it out here (click the image):
        </p>

        <a href="https://flappybird.steed.studio" target="_blank" className="mt-6">
          <Image
            className="rounded-full hover:shadow-[0_0_20px_5px_rgba(250,204,21,0.7)]"
            src={"/images/flappy_icon_animation.gif"}
            alt="Flappy Bird Animation"
            unoptimized
            width={250}
            height={250}
          />
        </a>
      </main>
  );
}
