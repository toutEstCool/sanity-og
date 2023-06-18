'use client';

import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home () {
  const projects = await getProjects()
  
  return (
    <div>
      <h1 className="text-7xl font-extrabold">Привет I&apos;m <span className="bg-gradient-to-r from-orange-400  via-red-500 to-purple-600 bg-clip-text text-transparent">Ogogo</span>!</h1>
      <p className="mt-3 text-xl text-gray-600">
        Алоха всем! Посмотри наши проекты тут 👇🏽
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Наши Проекты</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        projects.map(({ name, _id, image, slug }: Project ) => (
          <Link
            href={`/projects/${slug}`}
            key={_id} 
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
            {
              image && (
                <Image
                  src={image}
                  alt={name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                  loading="lazy"
                />
              )
            }
            <div className="font-extrabold bg-gradient-to-l from-orange-400  via-red-500 to-purple-600 bg-clip-text text-transparent mt-2">{name}</div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}
