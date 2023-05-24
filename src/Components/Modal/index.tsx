'use client'
import { iconXMark } from '@/constants/icon'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from '@/Components/Button'

interface PopupModalProps {
    isOpen: boolean
    closeModal?: () => void
    hideCloseButton?: boolean
    children?: any
    alertBeforeClose?: boolean
    priority?: true
    callbackFn?: any
}

const PopupModal = ({
    isOpen,
    priority,
    hideCloseButton,
    alertBeforeClose,
    closeModal,
    children,
    callbackFn
}: PopupModalProps) => {
    const handleCloseModal = () => {
        if (alertBeforeClose) {
            callbackFn()
            return
        }
        if (typeof closeModal === 'function') closeModal()
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className={`fixed inset-0 ${priority ? 'z-[50]' : 'z-10'} poin`} onClose={() => {}}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black backdrop-filter backdrop-blur-sm bg-opacity-20' />
                </Transition.Child>

                <div className='fixed inset-0'>
                    <div className='flex min-h-screen overflow-scroll items-center justify-center p-2 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[800px] transform rounded-xl bg-white dark:bg-black-gray py-2 px-3 text-left align-middle shadow-xl transition-all'>
                                <div className='flex justify-between'>
                                    <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                                        {/* title */}
                                    </Dialog.Title>
                                    {!hideCloseButton && (
                                        <Button
                                            variant='icon'
                                            name=''
                                            icon={iconXMark}
                                            handleClick={() => handleCloseModal()}
                                        />
                                    )}
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default PopupModal
