import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const AnimationSwitch = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Switch
            checked={checked}
            onCheckedChange={setChecked}
            className="data-[state=checked]:bg-black bg-gray-300 relative transition-colors duration-300">
            <span
                className={`
          absolute left-0 top-0 h-6 w-6 bg-white rounded-full shadow flex items-center justify-center
          transition-all duration-300 transform
          ${checked ? 'translate-x-6' : 'translate-x-0'}
        `}>
                {checked ? (
                    <Moon className="h-4 w-4 text-gray-600 transition-opacity" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-500 transition-opacity" />
                )}
            </span>
        </Switch>
    );
};

export default AnimationSwitch;
