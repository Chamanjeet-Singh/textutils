// import React , {useState}from 'react'

export default function About(props) {

    // const [myStyle , setMyStyle]= useState ( {
    //     color: 'black',
    //     backgroundColor: 'white'
         
    // }) 

    let myStyle ={
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
         border : '2x pixel solid',
         bordercolor : props.mode === 'dark'?'white':'rgb(36 74 104)'
    }

    // const [btntext, setBtnText]=useState('Enable dark mode')

    // const tooglestyle =()=>{
    //       if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //       }
    //       else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //       }
    // }
     return (
    <div className='container' >
        <h1 className='my -3' style={{ color : props.mode === 'dark'? 'white':'#042743'}}>About Us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyze the text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                    <div class="accordion-body" style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item" style={myStyle}>
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatibility</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though 
                        the transition does limit overflow.
                    </div>
                    </div>
                </div>
                </div>
                
    </div>
  )
}
