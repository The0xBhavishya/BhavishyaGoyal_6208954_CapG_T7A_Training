class FlipkartPage{
    page : any  
    mobile:  any
    getOtpBtn:any
    getVerifyBtn:any
    home:any
    gudiPadwaStore:any
    product_5th:any
    addtoCart5:any
    proudct8:any
    addtoCart8:any



    constructor(page){
        this.page=page
        this.mobile=page.locator('//input[@class="xkp9Hl ZvCKfk"]')
        this.getOtpBtn=page.locator('//button[@class="WHahJn UejJtu sz5klr"]')
        this.getVerifyBtn=page.locator('//button[class="WHahJn b81DoB kVHTpJ"]')
        this.home=page.locator('//img[@src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/home-final.svg"]')
        // this.gudiPadwaStore=page.locator('//img[@src="https://rukminim2.flixcart.com/fk-p-flap/100/100/image/88e557198b04f01c.png?q=90"]')
        this.gudiPadwaStore = page.locator('//img[contains(@src,"f8c36fb90d6c676a")]');
        // this.gudiPadwaStore=page.locator(locator('._3n8fna1co._3n8fna10j._3n8fnaod._3n8fna1._3n8fnac7._1i2djtb9._1i2djtk9._1i2djtir._1i2djtja').first())
        // this.product_5th=page.locator('//img[@src="https://rukminim2.flixcart.com/fk-p-flap/520/780/image/705ce00ac429dd26.jpg?q=90"]')
        this.product_5th=page.locator('(//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _9nihix56"])[2]')
        this.addtoCart5=page.locator('//*[@id="slot-list-container"]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[14]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div/div')
        this.proudct8=page.locator('//*[@id="slot-list-container"]/div/div[14]/div/div/div/div/div/div/div/div/div/div/div/a/div[1]/div[2]')
        // this.addtoCart8=page.locator('<div dir="auto" class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a" style="color: rgb(51, 51, 51); font-size: 15px; line-height: 20px; font-family: inter_bold;">Add to cart</div>')
        
    }

    async navigate(url: string) {
       await this.page.goto(url)

    }

    async enterMobile(mobileNumber:string){
     await this.mobile.fill(mobileNumber)

    }

    async clickGetOtp(){
      await this.getOtpBtn.click()
}

    async clickHome(){
      await this.home.scrollIntoViewIfNeeded()
     await this.home.click()
}

    async openGudiPadwaStore(){
     
        await this.gudiPadwaStore.scrollIntoViewIfNeeded() 
        await this.gudiPadwaStore.click()
 }

    

    async selectProduct5(){
        await this.product_5th.scrollIntoViewIfNeeded()
        await this.product_5th.click()
      
        await this.addtoCart5.click()
            await this.page.goBack()


    }

    async selectProduct8(){
      await this.proudct8.scrollIntoViewIfNeeded()
      await this.proudct8.click()
    //   await this.addtoCart8.click()

    }

    async goBackPage(){
    await this.page.goBack()
    }


}


export default FlipkartPage