import Heading, { Heading1b } from "@/components/heading"
import Paragraph from "@/components/Paragraph"
import Subheading from "@/components/Subheading"



export default function Home() {
  return (
    <div>
<h1>Hello from H1 tag <b>Page.tsx</b></h1>


<Heading/>
<Subheading/>
<Paragraph/>
<br />
<h1><strong>Props</strong></h1>
<Heading1b name="Maqsood" cast="Ansari" Stdno="222" />
<br />
<br />
<h1>Hello from H1 tag <b>Page.tsx</b></h1>


    </div>
  );
}
