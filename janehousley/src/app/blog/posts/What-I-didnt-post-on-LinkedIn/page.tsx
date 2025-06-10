import BlogPostLayout from "@/app/components/BlogPostLayout";
import Image from "next/image";

export default function What_I_didnt_post() {
    return (
        <BlogPostLayout title="What I didn@apos;t post on LinkedIn" subtitle="Ain@apos;t no growth in the comfort zone, baby!" date="26 February 2025">
            <p>
                My LinkedIn has a shiny new post, beaming with bright eyes of hope and opportunity, 
                wearing a pantsuit probably. It says:
            </p>

            <p className="italic">
                @quot;This August, I@apos;ll be moving to Madison, Wisconsin to work full time as a software developer at Epic! 
                I could not be more grateful to be returning to such an impressive and impactful company for my first 
                job after college. I believe in and support everything Epic stands for, and I feel lucky to have the 
                opportunity to contribute to their goal to @apos;Save Lives@apos;. I greatly enjoyed being a software developer 
                intern at Epic during the summers of 2023 and 2024 and am excited to see my role expand as a full time 
                developer. See you soon, WI!@quot;
            </p>

            <p>
                It@apos;s all true, but there@apos;s emotional dimension hidden behind these ecstatic and glowing words. 
                There@apos;s bittersweetness and a little bit of fear. There@apos;s excitement for the future joined at 
                the hip with preemptive grief for what I@apos;m leaving behind.
            </p>

            <p>
                A few weeks ago, I quickly jotted down in my notes app:
            </p>

            <Image
                src="/blog_thumbnails/linkedin_notes_app.jpg"
                alt="Notes app screenshot"
                width={850}
                height={500}
            />

            <p>
                That@apos;s all. Like a line of a poem. As you can see, I@apos;m feeling quite melodramatic about my exodus 
                to the midwest. I@apos;ve made lists of things I@apos;m going to miss, as a way to remind myself to savor it all. 
                I recognize I@apos;ve grown very comfortable in Utah. My apartment is lived-in and feels like home. 
                I know my favorite grocery stores and local restaurants. I know which streets have fewer stop signs 
                and the fastest ways to get to my friends@apos; houses. I know my friends@apos; schedules. 
                I know who will go grocery shopping with me; I know who will invite me over to watch a movie. 
                I know my friends@apos; friends.
            </p>
            
            <p>
                I know which park to go lay at when the air starts to feel warm in March. When I get a new semester 
                class schedule, I know where the classrooms are and I know the professors. I know what kinds of 
                books the Provo City Library has available and what kinds are always on hold. I know how warm to 
                dress in October. I know where to drive when the leaves start to change color. I have memorized the 
                bus schedule and when the Orem In-n-Out will be busy. I have my favorite ski resort, and my favorite 
                lift in that resort. I know what days and times the temples are busy. I have several favorite niche 
                thrift stores and a favorite carwash. I always get my oil changed at Valvoline. I watch Bachelor on 
                Tuesdays and Severance on Thursdays. I eat lunch in the Wilk at noon. Out of the three Targets close to me, 
                I know which is my favorite and what time they close.
            </p>

            <p>
                So, you can see, I@apos;m very comfortable here. I have my routines and my favorite places and friends all 
                ironed out. That@apos;s part of why moving to Wisconsin is scary to me right now. New habits, 
                libraries, grocery stores. New weather and a new room layout. I@apos;ve tried to be blindingly optimistic 
                about it. I love a clean slate almost as much as I dread goodbyes. As often as I feel caught in 
                self-pity and anxiety over this change, I force myself to acknowledge all of the things I will 
                love that I don@apos;t even know about yet. There may not be a South End Market, but there is a James Madison Park.
            </p>

            <p>
                The things I worry most about missing are the things that are not so easily replaceable, 
                like the mountains and Cottonwood Canyon. All I can do is stare and stare and stare at them, 
                hoping to take as much of them with me as I can. It@apos;s like carrying a handful of water to Wisconsin. 
                A fruitless endeavor, but noble and worthwhile nonetheless. I could lay down and kiss the Earth, 
                kiss Utah@apos;s dirt, and proclaim to her how much I@apos;ll miss her. I imagine she says, @quot;I@apos;m not going anywhere, 
                and neither are your memories of me.@quot; Jumping in the Provo River in November. Studying on the 5th floor 
                of the HBLL. Walking to Kiwanis Park. Flying out of the Provo Airport. Hiking Mt. Timpanogos. Going 
                to Baking Club on Wednesdays. Running into exes. Sitting on the train. Wearing a cap and gown, 
                showing my family where I study math every day. Hosting a Galentine@apos;s Brunch. Crying in the Tanner 
                Building bathroom. Watching the sunset over Utah Lake.
            </p>

            <p>
                I remind myself these memories never go away. I remind myself of the exciting new thing that wait for 
                me in Madison. I listen to @quot;Vienna@quot; by Billy Joel. Then, I listen to @quot;Landslide@quot; by The Chicks.
            </p>

            <p>
                I@apos;m very nostalgic, and right now it@apos;s to a fault. Sometimes I metaphorically shake myself by the 
                shoulders and say, @quot;Oh, come on. You@apos;re not going to <em>war</em>.@quot; I@apos;m not. I@apos;m going to Madison, Wisconsin. 
                Growth zone, here I come! Bon voyage!
            </p>

            <Image
                src="/blog_thumbnails/linkedin.jpg"
                alt="Mt Timp"
                width={850}
                height={500}
            />
        </BlogPostLayout>
    );
}