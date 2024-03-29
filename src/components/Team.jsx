import { useEffect, useId, useState, Fragment } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import teams from '@/data/team.json'

export function Team() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedIndex, setSelectedIndex] = useState(0)

  function handleSelectNextIndex() {
    setSelectedIndex((prevState) =>
      prevState < teams.length - 1 ? prevState + 1 : prevState,
    )
  }

  function handleSelectPrevIndex() {
    setSelectedIndex((prevState) => (prevState > 0 ? prevState - 1 : prevState))
  }

  function handleSelectIndex(index) {
    setSelectedIndex(index)
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
      id="team"
      aria-labelledby="team-title"
      className="bg-gradient-to-t from-jordi-beige-100 py-20 dark:from-black"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="team-title"
            className="font-display text-4xl font-medium tracking-tighter text-jordi-orange-500 sm:text-5xl"
          >
            Equipa
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-jordi-black dark:text-white">
            Vem conhecer a equipa que organizou este fantástico evento!
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
          selectedIndex={selectedIndex}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            {/* MOBILE TABLIST DATE PICKER */}
            <Tab.List className="flex md:hidden">
              {teams.map((team, index) => (
                <Tab key={index} as="div" className="outline-transparent">
                  {selectedIndex === index && (
                    <div className="flex w-screen items-center justify-between px-4">
                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-400"
                        onClick={handleSelectPrevIndex}
                      >
                        &lt;
                      </button>

                      <div className="-mt-2 text-center font-mono text-xl text-jordi-orange-300">
                        {team.name}
                      </div>

                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-400"
                        onClick={handleSelectNextIndex}
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
                teams.map((team, index) => (
                  <div
                    key={team.name}
                    className="relative hidden md:block lg:block lg:pl-8"
                    onClick={() => handleSelectIndex(index)}
                  >
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        index === selectedIndex
                          ? 'fill-jordi-orange stroke-jordi-orange'
                          : 'fill-transparent stroke-jordi-orange-400 dark:stroke-jordi-beige-50',
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'hidden font-mono text-sm sm:flex',
                          index === selectedIndex
                            ? 'text-jordi-orange'
                            : 'text-jordi-orange-400 dark:text-jordi-beige-50',
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {team.name}
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {teams.map((team) => (
              <Tab.Panel
                key={team.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {team.members.map((member, index) => (
                  <div key={index}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-jordi-orange-300',
                            'border-jordi-orange-600',
                            'border-jordi-orange-200',
                          ][index % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-black"
                        style={{ clipPath: `url(#${id}-${index % 3})` }}
                      >
                        <a href={`${member.social}`}>
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={`/images/team/${member.image}`}
                            alt=""
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                            width={560}
                            height={560}
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-jordi-orange-400 dark:text-jordi-orange-200">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-jordi-black dark:text-jordi-beige">
                      {member.organization}
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
