import React from 'react';
import Image from 'next/image';
import { boxData } from './data';

type ScrollBoxCardProps = (typeof boxData)[number];

export default function ScrollBoxCard({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  siteUrl,
}: ScrollBoxCardProps) {
  return (
    <section
      className='
        group
        relative
        overflow-hidden 
        rounded-lg 
        border border-slate-500
         bg-slate-800 
         px-8 py-6 transition 
        hover:scale-[1.02] 
        hover:brightness-105 sm:max-w-[40rem]'
    >
      <div
        className='
          flex flex-col
          sm:ml-[20rem]'
      >
        <h3 className='text-[1.2rem] font-semibold text-[--shadowfax-white]'>
          {title}
        </h3>
        <h4 className='text-[1rem] font-semibold text-[--shadowfax-white]'>
          {subtitle}
        </h4>
        <p className='text-[--shadowfax-white]] mt-1 whitespace-break-spaces text-[.7rem] tracking-wide'>
          {description}{' '}
        </p>
        {siteUrl !== '#' && (
          <a
            href={siteUrl}
            target='_blank'
            className='mt-3 text-[.8rem] text-[--daphne-blue] underline'
          >
            See it!
          </a>
        )}

        <ul className='mt-5 flex flex-wrap gap-x-3 gap-y-2'>
          {tags.map((tag) => (
            <li
              key={tag}
              className='rounded-md bg-[--daphne-blue] px-2 py-1 text-[0.8rem] tracking-wide text-[--raven-black]'
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        className='absolute right-[22rem] top-8 hidden rounded-lg transition duration-200
          group-hover:rotate-[2deg]
          group-hover:scale-105
          sm:block
        '
        src={imageUrl}
        alt={title}
        quality={95}
      />
    </section>
  );
}
