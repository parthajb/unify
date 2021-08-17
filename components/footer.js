import React from 'react';
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {

  

  return (
    <footer>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-6 pr-0 md:pr-24">
            <div className="mb-2">
              <Link href="/">
                <a
                  className="inline-block"
                  aria-label="Cruip"
                  style={{ outline: "none" }}
                >
                  <Logo version="#151540" />
                </a>
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p
            className="text-gray-400 transition duration-150 ease-in-out"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus turpis ac neque venenatis elementum. Praesent vitae orci ornare, tincidunt augue et, venenatis metus.
          </p>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-400 font-serif font-bold mb-2">Want to hire us?</h6>
            <a href="mailto:info@unifytech.in" className="font-semibold text-gray-700">info@unifytech.in</a>
          </div>
          
          <div className="sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-400 font-serif font-bold mb-2">Want to work with us?</h6>
            <a href="mailto:careers@unifytech.in" className="font-semibold text-gray-700">careers@unifytech.in</a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}
