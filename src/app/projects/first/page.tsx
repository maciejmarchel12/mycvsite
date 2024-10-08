import Image from "next/image";

export default function FirstProject() {
    return ( 
        <div className="p-6 bg-base-200">
            <h1 className="text-blue-500"> Welcome to the ReactStock project page </h1>
            <br></br>
            <h2>About the project:</h2>
            <br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non molestie neque. Vivamus quam ante, maximus quis risus vitae, mattis vestibulum nibh. Cras luctus venenatis lacus, id rhoncus arcu ornare eu. Donec eu aliquet velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget commodo est, tempor vulputate sem. Suspendisse a euismod ex. Integer rhoncus luctus lacus, et pulvinar diam tincidunt quis. Cras molestie, nibh et consectetur ultrices, odio nisl venenatis sapien, quis ultricies ante odio ut augue. Fusce venenatis scelerisque risus et blandit. Duis urna massa, dictum vel pellentesque ac, tempus ut libero.
            </p>
            <br></br>
            <div className="flex justify-center space-x-6 items-center">
                <Image 
                    src="/images/reactStockThumbnail2.png"
                    alt="Inventory Page"
                    width={1080}
                    height={1920}
                    className="rounded-lg border-2 border-gray-300"
                    />
            </div>
            <br></br>
            <p>
                Mauris dictum a augue a bibendum. Morbi venenatis sapien nec augue condimentum, non pretium urna commodo. Nunc quis augue suscipit, imperdiet ligula ac, auctor risus. Integer vel tincidunt metus. Donec venenatis ex id velit rhoncus consectetur. Vestibulum iaculis interdum dolor ac rutrum. Integer nec lectus maximus, auctor lectus a, sodales dui. Nam consectetur volutpat erat quis euismod. Sed non lacus malesuada nulla sollicitudin consequat. Curabitur a mattis magna, non consequat enim. Mauris id purus sed est scelerisque faucibus. Maecenas iaculis accumsan aliquet. Nulla faucibus sapien risus, et tincidunt purus efficitur non. Ut eu lacus efficitur, vestibulum erat nec, egestas justo. Vestibulum id risus id mauris fermentum semper.
            </p>
            <br></br>
            <p>
                Cras eget feugiat erat. Nunc ultrices ligula eu ex vulputate interdum. Donec id ultricies ligula. Suspendisse accumsan sapien diam. Suspendisse potenti. Pellentesque euismod mi nibh, eu aliquam mauris tristique tristique. Maecenas lacus mauris, auctor ut sagittis id, dictum at nisl. Donec vel tempus orci. Donec quis eros nibh. Morbi sollicitudin tempus nibh, nec porta diam luctus vel. Quisque id tempus sapien, ac ultrices lacus. Vivamus ac vehicula turpis. Suspendisse ligula turpis, pulvinar non libero non, luctus molestie turpis.
            </p>
            <br></br>
            <p>
                Suspendisse tincidunt quis risus sit amet viverra. Nunc ac mi et tortor sodales sollicitudin. Proin viverra erat non ex euismod, vitae vulputate neque lobortis. Phasellus auctor nulla sodales lectus cursus egestas. Etiam placerat aliquam augue sed accumsan. Donec rutrum gravida ullamcorper. Etiam enim odio, lacinia quis auctor sed, posuere ac elit. Mauris lectus orci, lobortis at lectus sed, interdum facilisis nisi. Vivamus laoreet elit eget lacus congue, a semper odio accumsan. Mauris hendrerit vel ligula in bibendum. Phasellus sed ligula diam. In pharetra ante enim, sit amet condimentum ligula luctus a.
            </p>
            <br></br>
            <p>   
                Donec vitae metus ligula. Ut ultrices congue quam, sed consequat leo placerat sit amet. Donec purus mauris, fringilla id ultrices non, hendrerit id nunc. Sed dui massa, porttitor venenatis vehicula vel, sodales nec sem. Sed a mi ut velit blandit pharetra. Nulla imperdiet imperdiet lacus, ac aliquet dui facilisis ac. Sed vitae vestibulum velit, vitae lobortis neque. Maecenas interdum consequat commodo. Suspendisse at massa at odio molestie tincidunt. Vivamus consectetur risus quis massa lobortis, eu commodo mi viverra. Aliquam nec tellus quis massa volutpat euismod. Donec dapibus urna vitae nibh faucibus, eu semper metus gravida. Aliquam ut tincidunt turpis. Nunc scelerisque mauris ut sem consequat efficitur. 
            </p>
            <br></br>
            <h2 className="flex justify-center space-x-6 items-center">
                Powered by:
            </h2>
            <br></br>
                <div className="flex justify-center space-x-6 items-center">
                    <Image src="https://simpleicons.org/icons/react.svg" alt="React Logo" width={40} height={40} />
                    <Image src="https://simpleicons.org/icons/github.svg" alt="Github Logo" width={40} height={40} />
                    <Image src="https://simpleicons.org/icons/nodedotjs.svg" alt="NodeJS Logo" width={40} height={40} />
                    <Image src="https://simpleicons.org/icons/mui.svg" alt="Material UI Logo" width={40} height={40} />
                    <Image src="https://simpleicons.org/icons/mongodb.svg" alt="MongoDB Logo" width={40} height={40} />
                    <Image src="https://simpleicons.org/icons/render.svg" alt="Render Logo" width={40} height={40} />
                </div>
            <br></br>
        </div>
        );
}