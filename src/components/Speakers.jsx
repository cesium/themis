import { useEffect, useId, useState, Fragment } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import days from '@/data/speakers.json'

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)

  function handleSelectNextDateIndex() {
    setSelectedDateIndex((prevState) =>
      prevState < 2 ? prevState + 1 : prevState,
    )
  }

  function handleSelectPrevDateIndex() {
    setSelectedDateIndex((prevState) =>
      prevState > 0 ? prevState - 1 : prevState,
    )
  }

  function handleSelectDateIndex(index) {
    setSelectedDateIndex(index)
  }

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="bg-jordi-beige-50 py-20 dark:bg-black sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-jordi-orange-500 sm:text-5xl"
          >
            Oradores
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-jordi-black dark:text-jordi-beige">
            Conhece algumas das pessoas mais brilhantes da área!
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
          selectedIndex={selectedDateIndex}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            {/* MOBILE TABLIST DATE PICKER */}
            <Tab.List className="flex md:hidden">
              {days.map((day, dayIndex) => (
                <Tab key={dayIndex} as="div" className="outline-transparent">
                  {selectedDateIndex === dayIndex && (
                    <div className="flex w-screen justify-between px-4">
                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-500"
                        onClick={handleSelectPrevDateIndex}
                      >
                        &lt;
                      </button>

                      <div className="text-center">
                        <span className="font-mono text-sm text-jordi-orange-400">
                          {day.name}
                        </span>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-jordi-orange dark:text-jordi-beige sm:ml-0"
                        >
                          {day.date}
                        </time>
                      </div>

                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-500"
                        onClick={handleSelectNextDateIndex}
                      >
                        &gt;
                      </button>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>

            {/* NORMAL TABLIST DATE PICKER */}
            <Tab.List className="hidden auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 md:grid lg:grid lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div
                    key={day.dateTime}
                    className="relative hidden md:block lg:block lg:pl-8"
                    onClick={() => handleSelectDateIndex(dayIndex)}
                  >
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-jordi-orange-400 stroke-jordi-orange dark:fill-jordi-beige-50 dark:stroke-jordi-beige-50'
                          : 'fill-transparent stroke-jordi-orange-400',
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'hidden font-mono text-sm sm:flex',
                          dayIndex === selectedIndex
                            ? 'text-jordi-orange dark:text-jordi-beige-50'
                            : 'text-jordi-orange-400 ',
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 ml-5 block text-2xl font-semibold tracking-tight text-jordi-orange sm:ml-0"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-jordi-beige-700',
                            'border-jordi-orange-500',
                            'border-jordi-orange-200',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={`/images/avatars/${speaker.image}`}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          width={560}
                          height={560}
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-jordi-orange-400 dark:text-jordi-orange-200">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-jordi-black dark:text-white">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
