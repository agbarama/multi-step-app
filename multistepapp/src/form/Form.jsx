import React from 'react'

const Form = () => {
  return (
    <div>
       <img class="mob-bg" src="../img/backgrounds/bg-sidebar-mobile.svg" alt="" />
    <div class="mobile-header">
      <div class="indicator">
        <p class="page-indicator one">1</p>
        <p class="page-indicator">2</p>
        <p class="page-indicator">3</p>
        <p class="page-indicator">4</p>
      </div>
    </div>

    <div class="container-1">
      <div class="side-bar">
        <img
          class="desk-bg"
          src="../img/backgrounds/bg-sidebar-desktop.svg"
          alt=""
        />
        <div class="stages">
          <div class="steps">
            <p class="page-indicator one">1</p>
            <div>
              <p class="step">STEP 1</p>
              <p class="step-text">YOUR INFO</p>
            </div>
          </div>
          <div class="steps">
            <p class="page-indicator">2</p>
            <div>
              <p class="step">STEP 2</p>
              <p class="step-text">SELECT PLAN</p>
            </div>
          </div>
          <div class="steps">
            <p class="page-indicator">3</p>
            <div>
              <p class="step">STEP 3</p>
              <p class="step-text">ADD-ONS</p>
            </div>
          </div>
          <div class="steps">
            <p class="page-indicator">4</p>
            <div>
              <p class="step">STEP 4</p>
              <p class="step-text">SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form-input">
        <div class="header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>
        </div>
        <!-- <form id="js-form"> -->
        <!-- <label for="name">Name</label> -->
        <div class="err">
          <label for="name" class="name">Name</label>
          <div class="error-message js-err-msg-n"></div>
        </div>
        <input
          class="js-form-name"
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
        />

        <!-- <label for="name">Email Address</label>
         -->
        <div class="err">
          <label for="email" class="email">Email Address</label>
          <div class="error-message js-err-msg-e"></div>
        </div>
        <input
          class="js-form-email"
          type="email"
          id="emial"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />

        <div class="err">
          <label for="phone" class="phone">Phone Number</label>
          <div class="error-message js-err-msg-p"></div>
        </div>
        <input
          class="js-form-phone"
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />

        <button class="btn desk-btn js-form-btn">Next</button>

        <!-- <div class="buttons">
          <button class="btn js-form-btn">Next</button>
        </div> -->
        <!-- </form> -->
      </div>
    </div>

    <div class="mobile-buttons">
      <button class="mob-next-btn js-form-btn">Next</button>
    </div>
    </div>
  )
}

export default Form