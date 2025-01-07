import './faq.css';

export default function FAQ() {
    return (
        <>
            {/* Header */}
            <img src="/images/bubbles.png" className="bubbles1 absolute -z-10" />
            <img src="/images/bubbles.png" className="bubbles2 absolute -z-10" />
            <img src="/images/bubbles.png" className="bubbles3 absolute -z-10" />
            <div className="flex flex-col items-center justify-start w-full px-4 py-8 gap-4">
                <div className="question p-4 w-full md:w-3/4 lg:w-1/2 bg-dgreen text-center flex justify-center items-center text-base md:text-lg text-cream font-lilita rounded-xl md:rounded-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quam eos dolor, commodi iure sequi minima earum ea ex.
                </div>
                <div className="answer p-4 w-full md:w-3/4 lg:w-1/2 flex justify-center items-center bg-lgreen text-center min-h-[13rem] text-3xl md:text-base text-cream font-lilita rounded-xl md:rounded-3xl border-2 md:border-4 border-dgreen">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta optio sit ex nihil unde recusandae itaque. A consequuntur perferendis libero magni consectetur voluptate, quidem inventore. Voluptatem voluptates eius deserunt adipisci doloribus tenetur eveniet aspernatur itaque illum est laboriosam repellat nulla porro, cum nisi! Tempora dolorum optio deleniti? Nulla, mollitia minus.
                </div>

                <div className="question p-4 w-full md:w-3/4 lg:w-1/2 bg-dgreen text-center flex justify-center items-center text-base md:text-lg text-cream font-lilita rounded-xl md:rounded-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quam sapiente eum pariatur vitae dignissimos.
                </div>
                <div className="answer p-4 w-full md:w-3/4 lg:w-1/2 flex justify-center items-center bg-lgreen text-center min-h-[13rem] text-3xl md:text-base text-cream font-lilita rounded-xl md:rounded-3xl border-2 md:border-4 border-dgreen">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi vitae quidem incidunt inventore, repudiandae ab. Aliquam illo aperiam perferendis iste, soluta ipsum tempore facere pariatur quo culpa.
                </div>

                <div className="question p-4 w-full md:w-3/4 lg:w-1/2 bg-dgreen text-center flex justify-center items-center text-base md:text-lg text-cream font-lilita rounded-xl md:rounded-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus eius suscipit corporis possimus quos.
                </div>
                <div className="answer p-4 w-full md:w-3/4 lg:w-1/2 flex justify-center items-center bg-lgreen text-center min-h-[13rem] text-3xl md:text-base text-cream font-lilita rounded-xl md:rounded-3xl border-2 md:border-4 border-dgreen">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nam officia officiis consequuntur dignissimos in iste quaerat illum veniam voluptatibus quos expedita, dolor pariatur voluptatum recusandae neque voluptas.
                </div>

                <div className="question p-4 w-full md:w-3/4 lg:w-1/2 bg-dgreen text-center flex justify-center items-center text-base md:text-lg text-cream font-lilita rounded-xl md:rounded-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fuga iste quaerat maiores cupiditate ut.
                </div>
                <div className="answer p-4 w-full md:w-3/4 lg:w-1/2 flex justify-center items-center bg-lgreen text-center min-h-[13rem] text-3xl md:text-base text-cream font-lilita rounded-xl md:rounded-3xl border-2 md:border-4 border-dgreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas vitae, placeat quae nemo laboriosam cupiditate facilis labore fugiat, ut similique voluptatibus deleniti.
                </div>
            </div>
            {/* Footer */}
        </>
    )
}