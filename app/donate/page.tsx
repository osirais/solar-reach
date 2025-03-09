"use client";

import { Button } from "@/components/ui/button";

export default function Donate() {
<<<<<<< HEAD
    return (
        <div className="relative bg[:-yellow-5]">
            <div className="mx-auto mt-64 flex w-full max-w-screen-lg flex-col px-40 pb-24 pt-16">
                <h1 className="text-4xl font-bold uppercase">Be a catalyst for change</h1>
                
                <p className="mt-6 text-2xl leading-7">
                    
                    At Solar Reach, we're bringing light and hope to communities without reliable electricity.<br /><br />
                    Your donation directly funds sustainable, solar-powered lights that improve education, safety, and quality of life.<br />
                    With your support, children can study after dark, families can feel safe at night, and entire communities can thrive.<br /><br />
                    <strong>Every dollar counts</strong>, and your generosity powers brighter futures through renewable energy.<br /><br />
                    <strong>Join us today.</strong>
                    Let's light up lives together and make a lasting global impact.<br />
                    Your contribution makes all the difference.<br /><br /><br /><br />
                </p>
                <div className="flex flex-col items-center">
                    <Button
                        onClick={() => window.open("https://www.paypal.com/donate/?hosted_button_id=QED7FXY72CW9Q", "_blank")}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg border-none cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all hover:bg-blue-600"
                    >
                        Donate via PayPal
                    </Button>
                </div>
            </div>
=======
  return (
    <div className="bg[:-yellow-5] relative">
      <div className="mx-auto mt-64 flex w-full max-w-screen-lg flex-col px-40 pb-24 pt-16">
        <h1 className="text-4xl font-bold uppercase">
          Be a catalyst for change
        </h1>

        <p className="mt-6 text-2xl leading-7">
          At Solar Reach, we&apos;re bringing light and hope to communities without
          reliable electricity.
          <br />
          <br />
          Your donation directly funds sustainable, solar-powered lights that
          improve education, safety, and quality of life.
          <br />
          With your support, children can study after dark, families can feel
          safe at night, and entire communities can thrive.
          <br />
          <br />
          <strong>Every dollar counts</strong>, and your generosity powers
          brighter futures through renewable energy.
          <br />
          <br />
          <strong>Join us today.</strong>
          Let&apos;s light up lives together and make a lasting global impact.
          <br />
          Your contribution makes all the difference.
          <br />
          <br />
          <br />
          <br />
        </p>
        <div className="flex flex-col items-center">
          <Button
            onClick={() =>
              window.open(
                "https://www.paypal.com/donate?token=nkmTNWLyuCCkRXJ_Tj-lLuZX9JiNcuna5O5jGwhjo9gdJNhRM6lcFSvY8Mf9NVaCr7jnBFzuA9ensI7x",
                "_blank",
              )
            }
            className="focus:shadow-outline h-12 w-full rounded-lg bg-indigo-700 px-6 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800"
          >
            Donate via PayPal
          </Button>
>>>>>>> 1b5218455dbfdfb387720b7a7e3c7e87ab2e9694
        </div>
      </div>
    </div>
  );
}
