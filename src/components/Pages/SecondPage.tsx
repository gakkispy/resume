import React from 'react'
import Grid from '../Grid'
import PersonalProject from '../PersonalProject'

export default function SecondPage() {
  return (
    <div>
          <Grid
              left={<PersonalProject></PersonalProject>}
          />
    </div>
  )
}
