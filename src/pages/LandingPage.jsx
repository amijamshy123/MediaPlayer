import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
        const navigate =useNavigate()
       const handleNavigate = ()=>{
        // navigation to home page
        navigate('/home')
       }
  return (
    <><div className='container '>
          <div className="header row align-items-center m-5">
            <div className='col-lg-5'>
              <h3>Welcome to <span className='text-warning'>Media player</span></h3>
              <p style={{textAlign:'justify'}}>Media player App.will allow you to add and remove thier uploaded videos,
              also helps to arrange them in different catagories by providing drag and drop functionalities.</p>
              <button onClick={handleNavigate} className='btn btn-info mt-2'>Get started</button>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6'>
              <img style={{width:'100%'}} src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing image" />
            </div>
          </div>
    <div className="features">
      <h3 className='text-center'>Features</h3>
      <div className="row mt-5">
      <div className="col-lg-4">
      <Card>
      <Card.Img height={'300px'} variant="top" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1025.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        User Can upload,view and remove the videos
        </Card.Text>
       </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4">
      <Card >
      <Card.Img  height={'300px'} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title>Catagorize Videos</Card.Title>
        <Card.Text>
         User can catagorize the videos according to their prefernces using drag and drop features
        </Card.Text>
       </Card.Body>
    </Card>
      
      </div>
      <div className="col-lg-4">
      <Card>
      <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/22/96/c2/2296c20f386199933e6b9a090b3eb27a.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
         User are able to see the history of watched videos
        </Card.Text>
       </Card.Body>
    </Card>
      
      </div>
      </div>
    </div>
      <div className="row video border p-5 mt-5 rounded">
        <div className="col-lg-6">
          <h3 className='text-warning'>Simple fast and powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-3'>Play everything:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam quos quisquam temporibus inventore alias fuga quidem numquam dolorum, </p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Catagorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati atque soluta non commodi neque dolorum quidem ratione repudiandae esse.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. rupti ut deleniti, quod, perferendis ex voluptas.</p> 
        </div>
        <div className="col-lg-6">
        <iframe width="656" height="369" src="https://www.youtube.com/embed/7gRJn7RgGcw" 
        title="Morning Mood 🍀 Morning music for positive energy ~ Chill Vibes Music" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      
        </div>
        <hr />
    </>
  )
}

export default LandingPage
