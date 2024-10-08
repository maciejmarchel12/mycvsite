import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-base-300 text-center p-8 flex-grow">
            <div className="mb-4">
                <p className="text-lg font-semibold">Powered by:</p>    
            </div>
            <div className="flex justify-center space-x-6 items-center">
                <Image src="https://simpleicons.org/icons/nextdotjs.svg" alt="Next.js Logo" width={40} height={40} />
                <Image src="https://simpleicons.org/icons/react.svg" alt="React Logo" width={40} height={40} />
                <Image src="https://simpleicons.org/icons/tailwindcss.svg" alt="Tailwind CSS Logo" width={40} height={40} />
                <Image src="https://simpleicons.org/icons/daisyui.svg" alt="daisyUI Logo" width={40} height={40} />
                <Image src="https://simpleicons.org/icons/github.svg" alt="GitHub Logo" width={40} height={40} />
                <Image src="https://simpleicons.org/icons/typescript.svg" alt="typescript Logo" width={40} height={40} />
            </div>
        </footer>
    );
}