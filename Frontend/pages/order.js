import Layout from '../components/Layout'
import MyButton from '../components/MyButton'
import FormItem from '../utils/FormItem'


export default function order() {
  return (
    <Layout title="Book Table" subtitle="Free and Fast">
      <div className="container-wrapper flex h-full items-center justify-center py-7">
        <form className="grid grid-cols-2 md:grid-cols-1 gap-5 border border-gray-300 shadow-lg p-6 rounded-md max-w-4xl w-full">
          <FormItem 
            labelText="Your Name"
            inputType="text"
            inputPlaceholder="enter your name"
          />
          <FormItem 
            labelText="Your Number"
            inputType="tel"
            inputPlaceholder="enter your number"
          />
          {/* <FormItem 
            labelText="Your Order"
            inputType="text"
            inputPlaceholder="enter food name"
          /> */}
          <FormItem 
            labelText="Number of guest"
            inputType="number"
            inputPlaceholder="number of guest"
          />
          {/* <FormItem 
            labelText="Additional Food"
            inputType="text"
            inputPlaceholder="extra with food"
          /> */}
          {/* <FormItem 
            labelText="How Much"
            inputType="number"
            inputPlaceholder="how many orders"
            min={0}
          /> */}
          <FormItem 
            labelText="Date "
            inputType="date"
          />
          <FormItem 
            labelText="Time"
            inputType="time"
          />
          {/* <FormItem 
            labelText="Your Address"
            inputPlaceholder="enter your address"

          /> */}
       
          
          <div className='pt-7'><MyButton text="Book Table" className="w-20"/></div>
        </form>
      </div>
    </Layout>
  )
}
