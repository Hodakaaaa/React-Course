import React, { useState } from 'react';

export default function About(props) {
 let mystyle = {
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',

 }
  

 

  return (
    <div>
      <div className="container" style={{ color: props.mode === 'dark'?'white':'#042743' }}>
        <h1 className="my-3">About Us</h1>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Analyze your text </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            The text is an instructional and informative message explaining the functionalities of ChatGPT, a large language model based on the GPT-4 architecture. It details ChatGPT's capabilities, including its ability to browse the web, process images, and execute Python code. The text also describes the tools available to ChatGPT, such as the browser tool for retrieving real-time information and the Python tool for executing code. It provides guidance on how to use these tools effectively and emphasizes proper citation practices for sourced information. Overall, the text serves as a comprehensive guide for users to understand and utilize ChatGPT's features.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Free to use</button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            The phrase "free to use" indicates that a product, service, or resource is available at no cost to the user. It implies that there are no monetary charges or fees required to access or utilize the offering. This term is often used to attract users by highlighting the absence of financial barriers. It can apply to software, applications, websites, content, or various other goods and services, ensuring accessibility to a broader audience. However, it is important to consider any potential limitations or conditions that might accompany the free usage, such as limited features, advertisements, or the need to create an account.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Browser Compatible</button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              The term "browser compatible" refers to software, websites, or web applications that are designed to function correctly across different web browsers. This ensures that users can access and interact with the content regardless of which browser they are using, whether it be Chrome, Firefox, Safari, Edge, or others. Achieving browser compatibility often involves adhering to web standards, thorough testing, and possibly including fallback mechanisms to handle differences between browsers. This term highlights the importance of a seamless user experience and accessibility for a diverse user base.
 
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
