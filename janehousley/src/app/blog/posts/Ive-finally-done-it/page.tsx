import BlogPostLayout from "@components/BlogPostLayout";

export default function Ive_finally_done_it() {
    return (
        <BlogPostLayout title="I've finally done it" subtitle="Learned how to take perfect mathematical notes" date="4 November 2024">

            <p>
                One of my favorite professors once said: 
                “There's slippery math and there's sticky math. 
                Sticky math is the math you see once and always remember. 
                Slippery math is the math you still have to look up every time. 
                It's okay to have a lot of slippery math: it doesn't mean you're bad at math; 
                it just means you should take good notes!” (Jen Brooks)
            </p>
            
            <h3>A Brief Herstory</h3>

            <p>
                I am currently working on my final year of my Master of Mathematics degree. 
                My undergrad was in Applied Math with emphasis in Computer Science. 
                My first week at BYU, I went to the bookstore and bought an iPad, 
                which I had been saving up for all summer. While most majors can get away with 
                typing their notes, I knew math was an area I would need an efficient way to hand-write my notes.
            </p>

            <p>
            My first few semesters at BYU, I took my notes like this: I would open a blank page in my note-taking app, 
            write a title that went along with the subject we were learning, and made sure to write down EVERYTHING. 
            I meticulously chose complementary colors, cute labels, and aesthetically pleasing formatting. 
            I wrote down every definition, every theorem, every example. I was basically rewriting the textbook, 
            and it looked great. It was quantity and quality. What could possibly be so bad about that?, you may ask. 
            I was so focused on taking my notes, that I often missed important segments of lectures trying to write 
            down what had been said a few minutes ago. And what's more, I rarely looked back at these notes. 
            They may have been useful for someone who didn't have access to a textbook or who missed lecture 
            and wanted a more digestible version of the section, but didn't provide much more than the textbook. 
            When I was studying for a test, I knew that my textbook would be at least as accurate as my notes, 
            and often opted to study out of that instead. And, because I made so many new files, it was difficult 
            to find the note that contained the subject I was trying to look up. Sometimes I would flip back through 
            my notes if there was a segment of the textbook that I didn't quite understand. But this was a slow process, 
            and it was rare that my notes provided much more information than the textbook. 
            The only thing they really did that my textbook didn't was look cute.
            </p>

            <img
                src="/blog_thumbnails/bad_notes.png"
                alt="Overdone Notes"
            />

            <p className="italic">
                Notes from my Sophomore Differential Equations class  
            </p>

            <p>
            Next, I corrected and took much fewer notes. 
            I over-corrected. I tried to figure out my learning style, and be more present in class. 
            I thought if I was really engaged in the lecture, even if I didn't write anything, 
            I would naturally remember it. And I could always go back and look at the textbook! 
            I underestimated how much I retained from note-taking simply by writing things down, 
            even if I never looked back at them.
            </p>

            <img
                src="/blog_thumbnails/bad_notes2.jpg"
                alt="Underdone Notes"
            />

            <p className="italic">
                The entirety of my notes for CS 240, taken my junior year.
            </p>

            <p>
                I felt like the optimal note-taking strategy was a balance beam between 
                over-writing and under-writing and I was gradient-descending to that optimal 
                spot with every class I took. With this process, I found a strategy that made 
                it easier to strike that balance and finally eased my anxieties about not paying 
                enough attention to the lecture because of my notes, or not taking enough notes 
                because I was too fixated on the lecturer.
            </p>
            
            <p>
                Forget the Cornell method, that never worked for me. 
                Forget the Outline method. Bulleted lists drag on, 
                and heaven forbid anyone take notes paragraph-style. 
                People who “don't need notes” are either liars or failing the class.
            </p>

            <p>
                Here I present to you: JANE'S METHOD.
            </p>

            <h3>A Few Caveats</h3>

            <p>
                This method relies on:
            </p>

            <ol className="list-decimal list-outside pl-6 space-y-2 mb-4">
                <li>
                    having an iPad, but could be done if you have a printer. 
                    I understand this isn't the most accessible option for everyone. 
                    I think having a nice 3-ring binder, a printer, some good markers, and extra paper would work beautifully.
                </li>
                <li> 
                    having a fairly good textbook, lecture notes, slides, 
                    or some kind of documentation of the material provided by the professor.
                </li>
            </ol>

            <p>
                This method is designed for STEM classes. 
                It worked well for me in an art history class and a technical writing class. 
                Other than that, I can't claim this is optimal all areas of study, but I'm willing to bet it's up there.
            </p>

            <h3>The Process</h3>

            <p>
            The main idea is you're taking notes in the margins of your textbook, 
            but now those notes look a lot more organized because you have an iPad!
            </p>

            <p>
                Humor me on this thought experiment. We take notes for 2 reasons:
            </p>

            <ol className="list-decimal list-outside pl-6 space-y-2 mb-4">
                <li>
                    Studies show that writing things down helps you remember them. 
                    And hand writing things helps you remember them better than typing. 
                    So we'll hand write. And even if you never look back at your notes, 
                    it is good that you wrote things down, because you probably remember them better.
                </li>

                <li>
                When do you look back at your notes? When you're studying for a test. 
                But you're probably more likely to look back at your textbook when studying for a test, 
                because you know that has a more complete and accurate catalog of the things you need to know. 
                But you want to also look back at your notes, because you spent time on them, and also because 
                they might help you understand something better than the textbook would.
                </li>
            </ol>
            <p>
            So we take notes in our textbook, so that when we're reviewing for an exam, 
            we can review our notes and the book at the same time. Here's a step-by-step:
            </p>

            <ol className="list-decimal list-outside pl-6 space-y-2 mb-4">
                <li>
                    First, you need to use the app Notability. 
                    I have heard people like GoodNotes too, but I've never used it so I can't speak to it's credibility.
                </li>
                <li>
                    Get your textbook in a PDF version.
                </li>
                <li>
                    Upload your textbook, the entire thing, into one single note. 
                    Why one note? Imagine you're trying to remember the definition of the 
                    Lebesgue integral. Did we learn that in Chapter 3 or Chapter 5? 
                    If your textbook is all in one note, you can search “Lebesgue” in one note and find the definition. 
                    If you've separated your textbook into different notes by chapter, 
                    you now have to look through each chapter to find this definition. 
                    With the search features of Notability, it is better to have your textbook all in a single note.
                </li>
                <li>
                    Read the section before the lecture. Circle things you don't understand. 
                    Star or highlight things you think are important. If you come up with a 
                    creative color-system, use that. Mostly, you need to make your eyes familiar 
                    to the main ideas and layout of the section.
                </li>
                <li>
                    During lecture, try to read along in the textbook. 
                    You read the section before the lecture so that if your lecturer says 
                    “now we'll talk about the Dominated Convergence Theorem”, you can remember 
                    “I saw this at the end of the section” and quickly flip there. 
                    You're not wasting time trying to figure out where to be looking. 
                    If your lecturer diverges far from what's in the book, 
                    add a blank page in the textbook and take notes on that. 
                    Otherwise, highlight things they emphasize. Write down phrases your lecturer 
                    says that makes it easier to understand a concept. Some days, I rewrite entire proofs 
                    if my professor explains it in a way that makes more sense than the textbook. 
                    Other days, I'm only underlining definitions and important theorems because the textbook does 
                    a pretty good job. When my professors provide examples, I add a blank page in my textbook and 
                    copy down their examples. Most of my annotations are notation clarifications (which I've found is 
                    90% of the source of confusion in math classes!) If your textbook says something like this:
                    {/* <p className="align_center">
                        \( f \\in L^{\\infty}([0,1]) \\text{ if ess sup}_{E} |f| &lt; \\infty \)
                    </p> */}

                    write down what the definition of ess sup is in the margin next to it! 
                    There's no way you remember what it is—that's slippery math. 
                    And there's no reason to force yourself to look it up every time. Just give yourself a hand—write it down.
                </li>
                <li>
                    Keep things chronological. In math, things build on top of each other, so it's useful to 
                    keep your notes chronological. Mathematical notes lose their usefulness when taken out of context.
                     In a mathematical theory class, if you read a definition out of context, it's hard to remember 
                     what you have already proved to be true up to that point. That's why it's useful to keep things 
                     in context. Taking notes in the textbook ensures that you're keeping things in context.
                </li>
                <li>
                    One last tip: if you're copying down an example, write exactly what the example is of. 
                    “Example of Measurable function that is not continuous”, “Example of how to integrate by parts”, 
                    “Example of applying Fubini's Theorem”. This will make the example a million times more useful when 
                    you review your notes.
                </li>
            </ol>
            <p>
                The beautiful thing about this method is you're not re-writing things that are already in your textbook. 
                I only write things that add to my understanding of what the textbook is trying to explain. 
                It eliminates that inefficiency. Instead of re-writing definitions, I'm writing useful mnemonics, 
                proof outlines, or general rules that probably should be sticky but, despite my best efforts, 
                are consistently slippery. But, you're still reading the important things 2-3 times before the 
                lecture is even over. You're highlighting them, annotating them, and remembering what it looks 
                like in your textbook. So when you go back to study, you'll think “oh yeah, I remember this!”
            </p>

            <img
                src="/blog_thumbnails/good_notes.jpg"
                alt="Good Notes"
            />
            <p className="italic">
                Notes from Real Analysis, this semester.
            </p>

            <h3>Conclusion (with an aside for any educators reading)</h3>
            <p>
                Your notes will differ by class, depending on how closely the professor follows the textbook. 
                It's ok if you have added 20 consecutive pages of examples and notes because the lecture diverged 
                from the textbook. It's ok if you're only underlining definitions and not adding anything new 
                because your lecture follows the textbook like the iron rod. Be flexible!
            </p>
            <p>
                If you're a professor reading this: one of the best things you can do for your students is 
                give them good course material. Whether that's a textbook or your own lecture notes, find 
                something that fits what you want to teach a.e.. If you're teaching out of a textbook, make 
                sure to provide examples and explanations that can't be found in the book, or else you're really 
                not providing value in the lecture. If you can explain a concept in 3 different ways, that's 
                3x more people that will understand that concept. And your students will write down the version 
                that resonates the most with them. Or, for the sake of time, explain a concept in 1 really, 
                really good way. Anticipate their questions, and vocalize them. If you prove a claim that states 
                “Every continuous function is measurable”, vocalize: “Is the converse true? It true that every 
                measurable function is continuous?” and provide a counterexample. This will help students remember
                the original claim. Before jumping into a proof, outline it. Emphasize the main idea and the end goal.
                Leave that outline on the board and reference it as you go through the details. Overall, think about
                how you want your students to take notes, and cater the lecture toward that.
            </p>
            <p>
                Back to the notetaker: this may sound messy. You may have stopped reading by this point, 
                or thought “this won't work for me.” I implore you to at least try this method for one semester 
                or even just one class. At least in math classes, I'm confident this will be one of the best 
                note-taking strategies you've tried. Feel free to iterate and modify depending on what works for you. 
                For example, I only use one color in all my note-taking, but some people may find it useful to have a 
                color-key for things that are important, things that will be on the exam, things that are confusing, etc. 
                Start here, with what I've described, and do what works for you. And let me know how it goes!
            </p>
        </BlogPostLayout>
    );
}
