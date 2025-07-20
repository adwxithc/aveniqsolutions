import { SectionHeading } from '#/SectionHeading';
import { Button } from '#/base';
export function CareerSection({ title, description, badge, buttons, ...rest }) {
    return (
        <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
            <div className="container px-4 mx-auto">
                <SectionHeading
                    align="center"
                    title={title}
                    description={description}
                    badge={badge}
                />
            </div>
            {buttons.length > 0 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} />
                    ))}
                </div>
            )}
        </section>
    );
}
