import React from "react";
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from "next/head";

function FourOhFour() {
    return <>
    <div className={`not-found--container bg-gradiant`}>
            <Head>
                <title>Test</title>
            </Head>     
            <div className={`w-full show not-found--bg`}>
                <div className="not-found--logo w-full flex flex-col justify-center items-center mt-10">
                    <Link href="/">
                            <a>
                                <h1>Test</h1>
                            </a>
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-24">
                    <h1 className="mb-5 text-xl"> Sorry!</h1>
                    <span className="mb-10">Not found!</span>
                    <Link href="/">
                        <a className="button min-padding green-btn md:mt-0 mt-5 px-1 hover:opacity-70">
                           Back to home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        
    </>
}


export default connect(null, null)(FourOhFour);

