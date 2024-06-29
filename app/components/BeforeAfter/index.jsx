import React from 'react'


const Tag = ({ text, bg, color = "#000" }) => {
    return (
        <div className={`bg-[${bg}] rounded-full p-2`}>
            <h1 className={`text-[${color}] text-sm`}>{text}</h1>
        </div>
    )
}

export default function BeforeAfter() {

    const befores = [
        {
            name: 'List 1',
            checked: false
        },
        {
            name: 'List 2',
            checked: true
        },
        {
            name: 'List 3',
            checked: true
        },
        {
            name: 'List 4',
            checked: false
        },
    ];

    const afters = [
        {
            day: 'Day 10',
            name: 'Read pages 1-10',
            time: '8:00 AM',
            status: 'done'
        },
        {
            day: 'Day 10',
            name: 'Read pages 1-10',
            time: '8:00 AM',
            status: 'doing'
        },
        {
            day: 'Day 10',
            name: 'Read pages 1-10',
            time: '8:00 AM',
            status: 'waiting'
        },
    ]

    const renderColor = {
        done: '',
        doing: '#15a3c3',
        waiting: '#bec2c2'
    }

    return (
        <div className='w-full flex flex-col items-center p-10'>
            <h1 className='text-black text-3xl font-bold'>Say good bye to boring list,</h1>
            <h1 className='text-black text-3xl font-bold'>Shout out to the fresh style</h1>
            <div className='flex w-full justify-center p-10 gap-10'>
                <div className='w-1/3 bg-gray-100 h-[500px] flex flex-col justify-between items-center p-5 rounded-md'>
                    <Tag text="Before" bg="#16a34a" color="#fff" />
                    <div className='flex flex-col gap-4 w-full'>
                        {
                            befores.map((before, index) => (
                                <div key={index} className='flex items-center gap-2 bg-white p-4 rounded-2xl'>
                                    <input type='checkbox' checked={before.checked} />
                                    <span className={before.checked && "line-through"}>{before.name}</span>
                                </div>
                            ))
                        }
                    </div>

                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae numquam,
                    </p>
                </div>
                <div className='w-1/3 bg-gray-100 h-[500px] overflow-hidden flex flex-col justify-between items-center py-5 rounded-md'>
                    <Tag text="After" bg="#ddd236" color="#fff" />
                    <div className='flex gap-4 w-[120%] '>
                        {
                            afters.map((after, index) => (
                                <div key={index} className='flex flex-col justify-center     items-center gap-2 bg-white p-4 rounded-2xl'>
                                    <Tag text={after.day} bg={renderColor[after.status]} color="#fff" />
                                    <h2 className={`text-xl font-bold text-center ${after.status === 'done' && 'line-through text-gray-200'}`}>
                                        {after.name}
                                    </h2>
                                    <span className='text-gray-200 text-xs'>
                                        {after.time}
                                    </span>
                                </div>
                            ))

                        }
                    </div>

                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae numquam,
                    </p>
                </div>
            </div>
        </div>
    )
}
