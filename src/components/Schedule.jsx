import { useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from 'public/images/background.jpg'

import schedule from '@/data/schedule.json'

function ScheduleTabbed() {
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

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 lg:hidden lg:grid-cols-2"
      selectedIndex={selectedDateIndex}
    >
      {/* MOBILE TABLIST DATE PICKER */}
      <Tab.List className="flex md:hidden">
        {schedule.map((day, dayIndex) => (
          <Tab
            key={dayIndex}
            as="div"
            className="outline-transparent [&:not(:focus-visible)]:focus:outline-none"
          >
            {selectedDateIndex === dayIndex && (
              <div className="-ml-4 flex w-screen justify-between px-4">
                <button
                  className="px-4 font-mono text-4xl text-primary"
                  onClick={handleSelectPrevDateIndex}
                >
                  &lt;
                </button>

                <div className="text-center">
                  <span className="font-mono text-sm text-primary">
                    {day.name}
                  </span>
                  <time
                    dateTime={day.dateTime}
                    className="mt-1.5 block text-2xl font-semibold tracking-tight text-secondary sm:ml-0"
                  >
                    {day.date}
                  </time>
                </div>

                <button
                  className="px-4 font-mono text-4xl text-primary"
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
      <Tab.List className="hidden justify-between gap-x-4 gap-y-10 overflow-x-auto pb-4 md:flex lg:flex-col">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative ml-4 w-[40%] flex-none pr-4 lg:w-auto lg:pr-0',
                dayIndex !== selectedIndex && 'opacity-70',
              )}
              onClick={() => handleSelectDateIndex(dayIndex)}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-xl font-semibold tracking-tight text-secondary sm:text-2xl">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 hidden text-sm tracking-tight text-secondary lg:flex lg:text-base">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-secondary/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-secondary">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-secondary">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl">
            Hor??rio
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-secondary">
            The worst people in our industry giving the best talks you???ve ever
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 -scale-x-100 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
