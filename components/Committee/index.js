import React, { useEffect, useState } from 'react'
import { COMMITTEE, PROFILE_PATH } from '../../public/profiles/profiles'
import * as c2022 from '../../public/profiles/2022/profiles'
import Member from './Member'

const Committee = () => {
  const past = [{ year: '2022', content: c2022 }]
  return (
    <>
      <Year profilePath={PROFILE_PATH} committee={COMMITTEE} />
      {past.map(({ year, content: c }) => {
        const { PROFILE_PATH, COMMITTEE } = c
        return (
          <>
            <h1 className="page-header-font sticky top-0 z-50 text-center pb-16">
              2022 Committee
            </h1>
            <Year profilePath={PROFILE_PATH} committee={COMMITTEE} />
          </>
        )
      })}
    </>
  )
}

const Year = ({ profilePath, committee }) => {
  const { general, executives } = committee

  return (
    <>
      <div className="pb-16">
        <div className="sticky top-0 z-30 bg-gradient-to-b from-club-blue-900 pb-36 -mb-36" />
        <div>
          <h1 className="sticky top-0 z-40 subheader-font text-center mb-8 sm:mb-16">
            Executive Committee
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 justify-items-center px-12">
            {executives.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.img}
                  text={mem.text}
                  profilePath={profilePath}
                />
              )
            })}
          </div>
        </div>
        <div className="">
          <h1 className="subheader-font sticky top-0 z-50 text-center pb-16">
            General Committee
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 justify-items-center">
            {general.map((mem) => {
              return (
                <Member
                  key={mem.id}
                  name={mem.name}
                  title={mem.title}
                  img={mem.img}
                  text={mem.text}
                  profilePath={profilePath}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Committee
