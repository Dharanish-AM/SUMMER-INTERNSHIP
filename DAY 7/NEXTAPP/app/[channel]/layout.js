import ChannelComp from "@/components/channelComp";
const ChannelLayout = ({ children }) => {
        return (
            <div>
                <h1>Channel Layout</h1>
                <ChannelComp />
                {children}
            </div>
        );
    };
export default ChannelLayout;