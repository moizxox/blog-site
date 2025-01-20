import TestImg from "../../assets/images/test-image.jpg";

const SingleBlog = () => {
  return (
    <>
      <section
        className="w-full bg-accent rounded p-6 text-primaryLight bg-cover bg-center relative"
        style={{ backgroundImage: `url(${TestImg})` }}
      >
        <div className="relative flex flex-col gap-4 z-10">
          <h1 className="font-pacifico text-3xl leading-relaxed ">
            Hello World!
          </h1>
          <p>
            Lets discover the best thing with us to achieve a lot in our life
            and make something unique to help people around us 😉.
          </p>
          <img
            src={TestImg}
            className="w-[60%] rounded h-[300px] object-cover"
            alt="Blog visual"
          />
        </div>

        <span className="absolute inset-0 bg-[#212a31e0] z-0"></span>
      </section>

      <section className="max-w-[1280px] py-[60px] mx-auto flex flex-col items-start gap-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil
        officiis exercitationem delectus, dignissimos voluptatibus animi
        assumenda, ducimus minima enim inventore reprehenderit? In consequatur,
        accusamus eum veritatis rerum aut vel, reprehenderit sint a alias qui
        dolore iste aperiam. Suscipit voluptatum ipsam non a assumenda. Corporis
        perferendis eveniet molestiae quas architecto eos, voluptas temporibus
        iste, atque distinctio, possimus dignissimos quod impedit earum quo
        porro eius ex cum ad! Accusantium, ipsum assumenda aliquid eum natus
        animi nemo sequi ducimus nobis, deserunt maxime corrupti deleniti labore
        beatae quo consectetur esse. Saepe qui repellat repudiandae quod sunt
        quaerat doloribus perspiciatis blanditiis aliquam officiis nihil
        voluptas labore id quisquam laudantium obcaecati est esse inventore
        fuga, modi tenetur impedit corporis? Placeat veritatis deserunt sit
        aliquam asperiores maiores officia totam, non nobis deleniti vitae
        voluptates adipisci expedita, tenetur quas similique? Quisquam molestiae
        perspiciatis vel numquam, sequi reiciendis provident minima, natus
        cupiditate in deserunt autem, repudiandae fugiat non exercitationem
        laudantium incidunt! In culpa labore quod libero nostrum nihil tempore
        id perferendis harum molestias, fugit recusandae nemo suscipit at ea ad
        laboriosam ratione excepturi, inventore laudantium consequatur non
        distinctio. Debitis consequuntur vitae, deserunt in aspernatur corporis
        voluptate quas alias neque odio unde aliquam! Mollitia, cupiditate
        fugiat nulla labore itaque eum dolorem accusantium? Reiciendis dolorum
        magnam laboriosam voluptas, pariatur in quaerat suscipit accusantium
        unde soluta architecto nihil voluptates eveniet rem maiores. Voluptas,
        magni autem, exercitationem voluptates similique sit beatae minima
        consectetur quod doloribus porro excepturi numquam possimus nesciunt
        tempore magnam veniam iusto nulla quibusdam accusantium ad! Inventore
        ullam necessitatibus qui voluptatibus atque similique ratione ad,
        possimus, eum quod, eligendi nostrum asperiores? Earum, corporis vel?
        Officia praesentium est harum dolorum, recusandae consequuntur ullam
        corrupti saepe ad, tempore commodi, voluptas optio at earum facere ut
        unde itaque quas dignissimos dolorem tenetur fugiat eligendi eius esse!
        Officia numquam aspernatur vel sit mollitia similique, suscipit autem
        illo quis odit, deserunt perspiciatis, totam id est facere rerum
        accusamus accusantium! Eum accusamus ab totam, architecto repudiandae
        laudantium? Cum ex eos corporis illum ut quaerat, fugiat adipisci dolore
        dolorem nisi, molestias soluta laboriosam eius recusandae? Ratione
        expedita soluta odit perferendis voluptate. At, eveniet. Delectus itaque
        consequatur esse at, impedit maxime ut, aliquid hic reiciendis quia
        atque nam expedita debitis necessitatibus? Labore in iste porro
        consectetur! Ipsum repellat dicta cumque temporibus. Necessitatibus,
        natus consequatur culpa non aliquam iste molestiae excepturi magni?
        Debitis dignissimos adipisci inventore dolor! Soluta saepe veniam
        doloribus assumenda laudantium distinctio! Quia a doloremque iure,
        quaerat molestias ipsa similique illum corporis quam expedita omnis modi
        neque dicta nemo vero! Aut hic, ad modi libero porro quam voluptatum
        quas sit recusandae quasi quod optio at incidunt et nulla aliquam
        repellat aperiam velit, facere pariatur quo quia. Labore ipsum corporis
        soluta reprehenderit, exercitationem provident natus illum ipsam
        consequuntur modi. Accusamus quae officiis deserunt corrupti est
        voluptatum expedita, reiciendis aut et deleniti doloremque modi
        molestiae, delectus eveniet amet nemo architecto incidunt! Sunt
        perspiciatis excepturi beatae possimus ex id exercitationem voluptatibus
        odio illo veniam. Cupiditate aperiam, odio, sit numquam vitae quisquam
        sequi aliquam voluptas, cum recusandae quo deserunt quos modi.
      </section>
    </>
  );
};

export default SingleBlog;
