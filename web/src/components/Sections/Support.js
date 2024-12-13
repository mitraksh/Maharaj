import {React,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import 'semantic-ui-css/semantic.min.css';
import { Divider, Header, Image, Segment,  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Modal,} from 'semantic-ui-react'
function Support() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Navbar props={'supportus'}></Navbar>
    <section className='container section section__height'>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button attached='top' color='orange'>Donate for a good cause!</Button>}
    >
      <ModalHeader>Please scan this QR Code for Donation.</ModalHeader>
      <ModalContent image>
        <Image size='medium' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwezRRmbnUqJh9gH3bwbnIJjt7l5nCj21sA&s' wrapped />
        <ModalDescription>
          <Header>🙏 We Thank you for your contribution towards a better future! 🙏</Header>
          <p>
            QR Code for Donation.
          </p>
          <p>The power of giving, as given in Sanatan Dharma, is not just about charity in the material sense but encompasses a broader spectrum of duty. 
            It includes sharing knowledge and extending kindness to all living beings. Such acts of generosity are considered 'Daana,' an essential duty 
            that purifies the soul and leads to spiritual growth.</p>
            <p>The saying, "What you give is what you will get," also explains the essence of giving. We must be more wise in giving to receive back in life.
            Giving has a ripple effect, creating a cycle of positivity and growth that benefits the entire cosmos. It nurtures love and compassion, dissolves greed and selfishness, and promotes the values of empathy and understanding. Through giving, we not only aid in the upliftment of others but also purify our hearts, paving the way for spiritual enlightenment.</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button
          content="Donated!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </ModalActions>
    </Modal>
    <Segment attached>
    <Header as='h1'>Food For Life Program</Header>
    <Image src='https://www.iskconmumbai.com/web/image/2453-662a8255/ff2.webp'  floated='left' fluid/>
    <h3>Hare Krishna Food for Life (FFL) is the world’s largest vegetarian food distribution program serving millions of meals daily, with projects in over 
      60 countries. With roots in the Vaishnava culture of charity and the distribution of pure food to all, the project is a modern day revival of the 
      ancient culture of hospitality and a belief in the equality of all beings. Food For Life has been lauded by The New York Times and government relief 
      agencies worldwide for its efforts worldwide.</h3>

    <h3>Srila Prabhupada, ISKCON’s Founder-acarya, is the inspiration behind Food for Life. He stated in 1972 that “No one within ten miles of an ISKCON 
    temple should go hungry.” Since that time ISKCON devotees have expanded a global network of free food restaurants, mobile services and relief programs 
    establishing daily delivery routes in many large cities around the world.</h3>

    <h3>Currently, Food for Life’s largest programs are in India. More than 1.2 million school children are a served multi-course hot, healthy, and tasty 
      lunch six days a week in cities throughout the sub-continent, through a partnership with the Indian government for the ‘Mid-day Meal’ scheme. Education 
      administrators have stated that the ISKCON Food for Life program, known locally as Annamrita, actually facilitates many poor children to attend school. 
      Otherwise, they explain, without the program the children would be forced to work as child laborers to earn enough to eat for the day.</h3>

    <h3>Food for Life volunteers also respond to natural disasters, bringing food and hope into the lives of people affected by events such as the wars 
      in Bosnia and Chechnya, the Indian Ocean Tsunami, the typhoon Haiyan, and Hurricane Katrina.</h3>

    <Divider />

    <Header as='h1'>Srila Prabhupada International Gurukul</Header>
    <Image src='https://pbs.twimg.com/media/Dnxt0uNXsAAXwmu.jpg' fluid />
    <h3>Here in the Srila Prabbhupada International Gurukul, we teach the young community to live life big size. All basic ettiquettes are taught here so that the 
      children lead their life in a wonderful and joyous way. Teachers are very compassionate.
    </h3>

    <Divider />

    <Header as='h1'>Gaushala</Header>
    <Image src='https://iskcongev.com/wp-content/uploads/2023/02/about-goshala-2.jpg' fluid />
    <h3>Bhaktivedanta Swami Goshala is located in ISKCON Vrindavan land and is a home for 350 cows, bulls and calves. Our main activity is cow 
      protection and education about the importance of cow protection (Go-Raksha).
    </h3>
    <h3>The Goshala at Govardhan Ecovillage was started in 2003. Beginning with only 9 cows & bulls, the number today has increased to 104 and is expected to reach 150 in next few years.
    One of the unique features at the Govardhan Ecovillage Goshala is the personal attention and care given, with separate special zones allocated for Bulls,
    Cows, Calves and milking Cows. Pregnant Cows are offered special diet and care to ensure proper health of the Cow and the calf.</h3>
    <h3>Old cows and bulls are given special care. Cows at Govardhan Ecovillage are treated as one of the family members and all due care is given to them. The health status of each and every cow is noted on a daily basis and is logged for long term monitoring.
    To ensure proper medical care a veterinary doctor visits the Goshala regularly and is locally available in case of all emergency situations. Primary treatments are done with homeopathy and herbal medicines.
    Apart from providing clean hygienic surroundings, fresh water and ventilation, great care is taken with regards to their diet. Proper nutrition is provided in the form of kadbakutti, corn flour, tuar and wheat bran.</h3>
  </Segment>


  </section>
    </>
  )
}

export default Support