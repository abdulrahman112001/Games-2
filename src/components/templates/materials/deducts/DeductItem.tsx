import { BsLink, BsRecordCircle } from "react-icons/bs";
import { FaEllipsisH, FaRegCalendarAlt ,FaQrcode   } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { FaCircleMinus, FaUser } from "react-icons/fa6";
import Recipient from '../../../../assets/recipient.png'
export default function DeductItem() {
    return (
        <div className="py-[10px] flex flex-col gap-[15px] rounded-[10px] border border-[#DBEDF5] shadow px-[10px] lg:px-[20px]">
            <div className="header flex justify-between">
                <div className="flex gap-[5px] text-[#09242E] items-center">
                    <FaCircleMinus className="text-[16px]"/>
                    <p className="font-medium text-[10px] lg:text-[16px] text-[#041116]">Deduct</p>
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px]">
                    <p className='text-[10px] lg:text-[12px] font-medium text-[#91969B] flex items-center gap-[5px] '><FaRegCalendarAlt />Feb, 2022</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-[14px] font-medium text-[#041116]">Deduct Title</p>
                <div className="flex items-center gap-[10px]">
                    <button className='text-[#478FB4] text-[18px] '><BsLink /></button>
                    <button className='text-[#478FB4] text-[15px] '><BsRecordCircle  /></button>
                    <button className='text-[#478FB4] text-[16px] '><FaEllipsisH /></button>    
                </div>
            </div>
            <p className="text-[12px] text-[#4A4646]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-between items-center">
                <div className="flex items-center gap-[10px]">
                    <RiFileList2Line   className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-[14px] text-[#041116]">Quantity</span>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-[5px] border border-[#DBEDF5] shadow px-[5px] w-[80px]">4000</button>
                    <p className="text-[12px] font-bold text-[#041116]">Units</p>
                    <p className="text-[12px]  text-[#30637C]">Bags</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-between items-center">
                <div className="flex items-center gap-[10px]">
                    <FaQrcode   className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-[14px] text-[#041116]">Item Code</span>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="rounded-[5px] border border-[#DBEDF5] shadow px-[5px] min-w-[80px]">4387525</button>
                    <p className="text-[12px] font-bold text-[#041116]">Item</p>
                    <p className="text-[12px]  text-[#30637C]">023</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-between items-center">
                <div className="flex items-center gap-[10px]">
                    <FaUser    className="text-[#09242E] text-[18px]"/>
                    <span className="font-medium text-[14px] text-[#041116]">Recipient</span>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={Recipient} alt="" />
                </div>
            </div>
        </div>
    )
}
