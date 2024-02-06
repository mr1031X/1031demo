import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
    return (
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px' }}>

        <div className="sticky justify-between items-right h-16 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <BellIcon className='w-6'/>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                        3
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-sm font-semibold">John Doe</div>
                    <img src="/path/to/profile-pic.png" alt="Profile" className="w-10 h-10 rounded-full" />
                </div>
            </div>
        </div>
        </nav>
    );

}

// interface NavbarProps {
//     notificationCount: number;
//     userName: string;
//     profilePicUrl: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ notificationCount, userName, profilePicUrl }) => {
//     return (
//         <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', backgroundColor: '#f2f2f2' }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
//                 <div>
//                     <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <div style={{ position: 'relative', marginRight: '20px' }}>
//                         <img src="/path/to/bell-icon.png" alt="Notification" style={{ height: '24px' }} />
//                         {notificationCount > 0 && (
//                             <div style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'red', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>
//                                 {notificationCount}
//                             </div>
//                         )}
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <div style={{ marginRight: '10px' }}>{userName}</div>
//                         <img src={profilePicUrl} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;