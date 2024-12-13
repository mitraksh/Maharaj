import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'
import Imagess from '../../../images/prabhupada.jpg'
import NYImage from '../../../images/navayogendra_maharaj.jpg'

function Photos() {

  return (
    <>
       <Grid doubling columns={5}>
    <GridColumn>
      <Image src={Imagess} />
    </GridColumn>
    <GridColumn>
      <Image src={NYImage} />
    </GridColumn>
    <GridColumn>
      <Image src={Imagess} />
    </GridColumn>
    <GridColumn>
      <Image src={Imagess} />
    </GridColumn>
    <GridColumn>
      <Image src={NYImage} />
    </GridColumn>
  </Grid>
    </>
  )
}

export default Photos