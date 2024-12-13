import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Card, Icon, GridRow, GridColumn, Grid, Divider } from 'semantic-ui-react'
import NYImage from '../../images/navayogendra_maharaj.jpg'
import './blogs.css'
function Blogs() {
  const extra = (
    <a>
      <Icon name='time' />
      24 mins ago
    </a>
  );

  const place = (
    <a>
      <Icon name='location arrow' />
      Udhampur
    </a>
  )


  return (
    <>
    <Navbar props={'blogs'}></Navbar>
    <main>
    <section className='container section section__height'>
    <Divider horizontal ><h2 class="section__title">Blogs</h2></Divider>
    <br/>
        <Grid stackable relaxed >
        <GridRow columns={3} >
        <GridColumn >
          <Card centered
                  image={require('../../images/prabhupada.jpg')}
                  header='Maharaj ji in Udhampur'
                  meta={place}
                  description='Maharaj ji is currently travelling to Udhampur with his disciples.'
                  extra={extra}
                />
        </GridColumn>
        <GridColumn>
          <Card centered
                  image={NYImage}
                  header='Maharaj ji in Udhampur'
                  meta={place}
                  description='Maharaj ji is currently travelling to Udhampur with his disciples.'
                  extra={extra}
                />
        </GridColumn>
        <GridColumn>
          <Card centered
                  image={NYImage}
                  header='Maharaj ji in Udhampur'
                  meta={place}
                  description='Maharaj ji is currently travelling to Udhampur with his disciples.'
                  extra={extra}
                />
        </GridColumn>
        </GridRow>
        <GridRow columns={3} >
        <GridColumn >
          <Card centered
                  image={require('../../images/prabhupada.jpg')}
                  header='Maharaj ji in Udhampur'
                  meta={place}
                  description='Maharaj ji is currently travelling to Udhampur with his disciples.'
                  extra={extra}
                />
        </GridColumn>
        <GridColumn>
          <Card centered
                  image={NYImage}
                  header='Maharaj ji in Udhampur'
                  meta={place}
                  description='Maharaj ji is currently travelling to Udhampur with his disciples.'
                  extra={extra}
                />
        </GridColumn>
        <GridColumn>
          <Card centered
                  image={require('../../images/prabhupada.jpg')}
                  header='His Grace A.C BhaktiVedanta Swami Srila Prabhupada on morning walk'
                  meta={place}
                  description='Discussions on Bhagavad Gita.'
                  extra={extra}
                />
        </GridColumn>
        </GridRow>
        </Grid>
    </section>
    </main>
    </>
  )
}

export default Blogs