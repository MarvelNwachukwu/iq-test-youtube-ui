import Image from 'next/image';
import {
  Play,
  SkipForward,
  Volume2,
  Maximize2,
  Subtitles,
  Settings,
  Pause,
} from 'lucide-react';
import { InfoIcon } from '../../../../public/icons/ico-info';

interface VideoPlayerProps {
  thumbnail: string;
  title: string;
  duration: string;
}

export const VideoPlayer = ({
  thumbnail,
  title,
  duration,
}: VideoPlayerProps) => {
  const iconButtonClass =
    'p-2 hover:bg-white/10 rounded-full transition-colors';
  const iconClass = 'w-5 h-5 text-white';

  return (
    <div className='relative aspect-video bg-black group'>
      <Image src={thumbnail} alt={title} fill className='object-cover' />

      {/* Overlay for controls */}
      <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity'>
        {/* Top Controls */}
        <div className='w-full absolute top-0 right-0 px-4 py-2 flex items-center justify-between'>
          <p className='text-white'>{title}</p>
          <button className={iconButtonClass}>
            <InfoIcon className={iconClass} />
          </button>
        </div>

        {/* Center play button */}
        <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70'>
          <Play className='w-8 h-8 text-white' fill='white' />
        </button>

        {/* Bottom controls */}
        <div className='absolute bottom-0 left-0 right-0 px-4 pb-2 bg-gradient-to-t from-black/80 to-transparent'>
          {/* Progress bar */}
          <div className='relative h-1 bg-white/30 rounded-full mb-4 cursor-pointer group/progress'>
            <div className='absolute left-0 top-0 h-full w-[40%] bg-red-500 rounded-full'>
              <div className='absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full scale-0 group-hover/progress:scale-100' />
            </div>
          </div>

          {/* Controls row */}
          <div className='flex items-center justify-between text-white'>
            <div className='flex items-center gap-2'>
              <button className={iconButtonClass}>
                <Pause className={iconClass} />
              </button>
              <button className={iconButtonClass}>
                <SkipForward className={iconClass} />
              </button>
              <div className='flex items-center gap-2 group/volume'>
                <button className={iconButtonClass}>
                  <Volume2 className={iconClass} />
                </button>
                <div className='w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300'>
                  <div className='w-20 h-1 bg-white/30 rounded-full'>
                    <div className='h-full w-[60%] bg-white rounded-full' />
                  </div>
                </div>
              </div>
              <span className='text-sm'>5:07 / {duration}</span>
            </div>

            <div className='flex items-center gap-2'>
              <button className={iconButtonClass}>
                <Subtitles className={iconClass} />
              </button>
              <button className={iconButtonClass}>
                <Settings className={iconClass} />
              </button>
              <button className={iconButtonClass}>
                <Maximize2 className={iconClass} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
