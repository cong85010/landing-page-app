import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const menus = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
    return (
        <div className='flex justify-between items-center px-8'>
            <div>
                <Image alt='logo' width={80} height={80} src="https://media.istockphoto.com/id/1345681613/vi/vec-to/creative-people-logo-vector-thi%E1%BA%BFt-k%E1%BA%BF-c%C3%B3-th%E1%BB%83-thay-%C4%91%E1%BB%95i-eps-10.jpg?s=612x612&w=0&k=20&c=Tfj-b_0b8crwl6ewj3DVUHsNWjEKSchD3n3pknIOH4s=" />
            </div>
            <div className='flex items-center gap-8'>
                {
                    menus.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            {menu.name}
                        </Link>
                    )
                    )}
            </div>
            <div>
                <button className='bg-slate-200 text-black px-4 py-2 rounded-2xl'>Register</button>
            </div>
        </div>
    )
}
